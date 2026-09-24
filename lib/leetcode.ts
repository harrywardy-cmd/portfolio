const LEETCODE_API = "https://leetcode.com/graphql";

const USERNAME = "harryward";

const QUERY = `
query getUserProfile($username: String!) {
  matchedUser(username: $username) {
    submitStats {
      acSubmissionNum {
        difficulty
        count
      }
    }
    userCalendar {
      streak
      totalActiveDays
    }
    tagProblemCounts {
      advanced { problemsSolved }
      intermediate { problemsSolved }
      fundamental { problemsSolved }
    }
  }
}
`;

interface TagCount {
  problemsSolved: number;
}

interface LeetCodeResponse {
  data?: {
    matchedUser: {
      submitStats: {
        acSubmissionNum: {
          difficulty: string;
          count: number;
        }[];
      };
      userCalendar: {
        streak: number;
        totalActiveDays: number;
      } | null;
      tagProblemCounts: {
        advanced: TagCount[];
        intermediate: TagCount[];
        fundamental: TagCount[];
      } | null;
    } | null;
  };
}

export interface LeetCodeStats {
  solved: number;
  easy: number;
  medium: number;
  hard: number;
  activeDays: number;
  streak: number;
  /** Number of topic tags with at least one solved problem. */
  topics: number;
}

export async function getLeetCodeStats(): Promise<LeetCodeStats> {
  const response = await fetch(LEETCODE_API, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query: QUERY,

      variables: {
        username: USERNAME,
      },
    }),

    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch LeetCode stats (${response.status})`
    );
  }

  const data: LeetCodeResponse = await response.json();

  const user = data.data?.matchedUser;

  if (!user) {
    throw new Error("LeetCode user not found.");
  }

  const count = (difficulty: string) =>
    user.submitStats.acSubmissionNum.find(
      (item) => item.difficulty === difficulty
    )?.count ?? 0;

  const tags = user.tagProblemCounts;

  const topics = tags
    ? [...tags.advanced, ...tags.intermediate, ...tags.fundamental].filter(
        (tag) => tag.problemsSolved > 0
      ).length
    : 0;

  return {
    solved: count("All"),
    easy: count("Easy"),
    medium: count("Medium"),
    hard: count("Hard"),
    activeDays: user.userCalendar?.totalActiveDays ?? 0,
    streak: user.userCalendar?.streak ?? 0,
    topics,
  };
}
