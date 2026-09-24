import { siteConfig } from "./site";

const GITHUB_GRAPHQL = "https://api.github.com/graphql";

const QUERY = `
  query getContributions($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
      }
    }
  }
`;

export async function getContributionCount(): Promise<number> {
  // The GraphQL API rejects unauthenticated requests.
  if (!process.env.GITHUB_TOKEN) {
    throw new Error("GITHUB_TOKEN is not set.");
  }

  const response = await fetch(GITHUB_GRAPHQL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: QUERY,
      variables: { login: siteConfig.github.username },
    }),

    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch GitHub contributions (${response.status})`
    );
  }

  const data = await response.json();

  const total =
    data?.data?.user?.contributionsCollection?.contributionCalendar
      ?.totalContributions;

  if (typeof total !== "number") {
    throw new Error("Unexpected GitHub contributions response.");
  }

  return total;
}
