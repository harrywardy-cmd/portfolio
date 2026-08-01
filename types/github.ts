export interface GitHubRepository {
    id: number;

    name: string;
    full_name: string;

    description: string | null;

    html_url: string;
    homepage: string | null;

    language: string | null;

    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
    open_issues_count: number;

    default_branch: string;

    visibility: "public" | "private";

    updated_at: string;
    pushed_at: string;
    created_at: string;

    owner: {
        login: string;
        avatar_url: string;
        html_url: string;
    };

    topics: string[];
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