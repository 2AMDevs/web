export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  fork: boolean;
  archived: boolean;
}

export interface GithubMember {
  login: string;
  avatar_url: string;
  html_url: string;
}

const GITHUB_HEADERS: HeadersInit = {
  Accept: "application/vnd.github.v3+json",
  "User-Agent": "2AMDevs-Website",
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

export async function getOrgRepos(org: string): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/orgs/${org}/repos?sort=updated&per_page=20&type=public`,
      {
        headers: GITHUB_HEADERS,
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return [];
    const repos: GithubRepo[] = await res.json();
    return repos
      .filter((r) => !r.fork && !r.archived)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 9);
  } catch {
    return [];
  }
}

export async function getOrgMembers(org: string): Promise<GithubMember[]> {
  try {
    const res = await fetch(
      `https://api.github.com/orgs/${org}/members?per_page=10`,
      {
        headers: GITHUB_HEADERS,
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}
