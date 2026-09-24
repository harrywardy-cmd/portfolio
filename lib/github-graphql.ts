import { siteConfig } from "./site";

const GITHUB_GRAPHQL = "https://api.github.com/graphql";

export interface ContributionStats {
  /** All-time contributions across every year of activity. */
  total: number;
  /** Contributions in the last 12 months. */
  lastYear: number;
  /** Longest run of consecutive days with contributions in the last 12 months. */
  longestStreak: number;
}

async function query<T>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<T> {
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
    body: JSON.stringify({ query, variables }),

    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub GraphQL request failed (${response.status})`);
  }

  const json = await response.json();

  if (json.errors || !json.data?.user) {
    throw new Error(
      `Unexpected GitHub GraphQL response: ${JSON.stringify(json.errors)}`
    );
  }

  return json.data.user;
}

interface CalendarResponse {
  contributionsCollection: {
    contributionYears: number[];
    contributionCalendar: {
      totalContributions: number;
      weeks: {
        contributionDays: { contributionCount: number }[];
      }[];
    };
  };
}

type YearlyTotalsResponse = Record<
  string,
  { contributionCalendar: { totalContributions: number } }
>;

export async function getContributionStats(): Promise<ContributionStats> {
  const login = siteConfig.github.username;

  const { contributionsCollection } = await query<CalendarResponse>(
    `
      query getCalendar($login: String!) {
        user(login: $login) {
          contributionsCollection {
            contributionYears
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                }
              }
            }
          }
        }
      }
    `,
    { login }
  );

  const { contributionYears, contributionCalendar } =
    contributionsCollection;

  // GitHub only returns one year per collection, so sum each year separately.
  const yearlyTotals = await query<YearlyTotalsResponse>(
    `
      query getYearlyTotals($login: String!) {
        user(login: $login) {
          ${contributionYears
            .map(
              (year) => `
                y${year}: contributionsCollection(
                  from: "${year}-01-01T00:00:00Z"
                  to: "${year}-12-31T23:59:59Z"
                ) {
                  contributionCalendar {
                    totalContributions
                  }
                }
              `
            )
            .join("\n")}
        }
      }
    `,
    { login }
  );

  const total = Object.values(yearlyTotals).reduce(
    (sum, year) => sum + year.contributionCalendar.totalContributions,
    0
  );

  let longestStreak = 0;
  let currentRun = 0;

  for (const week of contributionCalendar.weeks) {
    for (const day of week.contributionDays) {
      currentRun = day.contributionCount > 0 ? currentRun + 1 : 0;
      longestStreak = Math.max(longestStreak, currentRun);
    }
  }

  return {
    total,
    lastYear: contributionCalendar.totalContributions,
    longestStreak,
  };
}
