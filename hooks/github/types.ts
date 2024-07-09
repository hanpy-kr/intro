export interface GithubRepos {
  id: string;
  name: string;
  html_url: string;
  clone_url: string;
}

export const queryKeys = {
  githubRepo: ["RepoId"] as const,
  githubRepoById: (RepoId: string) => ["githubRepo", RepoId] as const,
};
