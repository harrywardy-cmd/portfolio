const GITHUB_GRAPHQL = "https://api.github.com/graphql";

export async function getContributionCount(): Promise<number> {
  const query = `
    query {
      user(login: "harrywardy-cmd") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
        }
      }
    }
  `;

  const response = await fetch(GITHUB_GRAPHQL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),

    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub contributions.");
  }

  const data = await response.json();

  return (
    data.data.user.contributionsCollection.contributionCalendar
      .totalContributions
  );
}