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

export interface GithubUserProfile {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  blog: string | null;
  location: string | null;
  public_repos: number;
  followers: number;
}

/** The two founders — always show these two regardless of org membership API. */
export const TEAM_LOGINS = ["aashutoshrathi", "mohitkyadav"] as const;

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
      { headers: GITHUB_HEADERS, next: { revalidate: 3600 } }
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

export async function getUserProfile(
  login: string
): Promise<GithubUserProfile | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${login}`, {
      headers: GITHUB_HEADERS,
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getTeamProfiles(): Promise<GithubUserProfile[]> {
  const results = await Promise.all(TEAM_LOGINS.map(getUserProfile));
  return results.filter((r): r is GithubUserProfile => r !== null);
}
