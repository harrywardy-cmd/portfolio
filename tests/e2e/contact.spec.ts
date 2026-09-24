import { expect, test, type Page } from "@playwright/test";

// The API is mocked in every test so no real emails are sent.

async function fillForm(page: Page) {
  await page.getByLabel("Full Name").fill("Jane Smith");
  await page.getByLabel("Email Address").fill("jane@example.com");
  await page.getByLabel("Subject").fill("Graduate role");
  await page.getByLabel("Message").fill("Hi Harry, I'd love to chat.");
}

test.describe("contact form", () => {
  test("sends the message and shows a confirmation", async ({ page }) => {
    let body: Record<string, unknown> | undefined;

    await page.route("/api/contact", async (route) => {
      body = route.request().postDataJSON();
      await route.fulfill({ json: { success: true } });
    });

    await page.goto("/contact");
    await fillForm(page);
    await page.getByRole("button", { name: "Send Message" }).click();

    await expect(
      page.getByText("Your message has been sent successfully!")
    ).toBeVisible();

    expect(body).toMatchObject({
      name: "Jane Smith",
      email: "jane@example.com",
      subject: "Graduate role",
      // The hidden honeypot field is sent empty by real visitors.
      website: "",
    });

    // The form resets after a successful send.
    await expect(page.getByLabel("Full Name")).toHaveValue("");
  });

  test("shows the server's error message", async ({ page }) => {
    await page.route("/api/contact", (route) =>
      route.fulfill({
        status: 429,
        json: { error: "Too many messages. Please try again in a few minutes." },
      })
    );

    await page.goto("/contact");
    await fillForm(page);
    await page.getByRole("button", { name: "Send Message" }).click();

    await expect(
      page.getByText("Too many messages. Please try again in a few minutes.")
    ).toBeVisible();
  });

  test("requires the mandatory fields before sending", async ({ page }) => {
    let called = false;

    await page.route("/api/contact", (route) => {
      called = true;
      return route.fulfill({ json: { success: true } });
    });

    await page.goto("/contact");
    await page.getByRole("button", { name: "Send Message" }).click();

    const missing = await page
      .getByLabel("Full Name")
      .evaluate((input: HTMLInputElement) => input.validity.valueMissing);

    expect(missing).toBe(true);
    expect(called).toBe(false);
  });
});
