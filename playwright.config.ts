import { defineConfig, devices } from "@playwright/test";

const PORT = 3100;
const CI = Boolean(process.env.CI);

// Locally, use the installed Microsoft Edge so no browser download is
// needed. CI installs Playwright's Chromium instead.
const channel = CI ? undefined : "msedge";

/**
 * End-to-end tests run against a production build:
 *
 *   pnpm build && pnpm test:e2e
 */
export default defineConfig({
  testDir: "tests/e2e",
  fullyParallel: true,
  forbidOnly: CI,
  retries: CI ? 2 : 0,
  reporter: CI ? [["github"], ["html", { open: "never" }]] : "list",

  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "desktop",
      use: { ...devices["Desktop Chrome"], channel },
    },
    {
      name: "mobile",
      use: { ...devices["Pixel 7"], channel },
    },
  ],

  webServer: {
    command: `pnpm start --port ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !CI,
    timeout: 120_000,
  },
});
