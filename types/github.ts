export interface GitHubRepository {
  id: number;

  name: string;
  full_name: string;

  description: string | null;

  html_url: string;
  homepage: string | null;

  language: string | null;
  topics: string[];

  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  open_issues_count: number;

  default_branch: string;

  visibility: "public" | "private";
  private: boolean;
  fork: boolean;
  archived: boolean;

  created_at: string;
  updated_at: string;
  pushed_at: string;

  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };

  license: {
    key: string;
    name: string;
  } | null;
}

export interface GitHubCommit {
  sha: string;

  html_url: string;

  commit: {
    message: string;

    author: {
      name: string;
      email: string;
      date: string;
    };
  };

  author: {
    login: string;
    avatar_url: string;
    html_url: string;
  } | null;
}

/**
 * Processed commit used by the UI.
 */
export interface GitHubActivity {
  sha: string;

  message: string;

  html_url: string;

  date: string;

  /**
   * Human-readable relative time
   * e.g. "2 hours ago", "Yesterday"
   */
  relativeTime: string;
}