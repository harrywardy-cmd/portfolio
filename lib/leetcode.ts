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
  }
}
`;

interface LeetCodeResponse {
  data: {
    matchedUser: {
      submitStats: {
        acSubmissionNum: {
          difficulty: string;
          count: number;
        }[];
      };
    } | null;
  };
}

export async function getAlgorithmCount(): Promise<number> {
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

  if (!data.data.matchedUser) {
    throw new Error("LeetCode user not found.");
  }

  const totalSolved =
    data.data.matchedUser.submitStats.acSubmissionNum.find(
      (item) => item.difficulty === "All"
    );

  return totalSolved?.count ?? 0;
}