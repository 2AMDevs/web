"use client";

import { ExternalLink, GitFork, Star, FolderGit2 } from "lucide-react";
import type { GithubRepo } from "@/lib/github";

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3776ab",
  Go: "#00add8",
  Rust: "#ce422b",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  Ruby: "#701516",
  Swift: "#f05138",
  Kotlin: "#7f52ff",
  Dart: "#00b4ab",
  Shell: "#89e051",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Vue: "#41b883",
  Svelte: "#ff3e00",
};

function LanguageDot({ lang }: { lang: string | null }) {
  if (!lang) return null;
  const color = LANGUAGE_COLORS[lang] ?? "#8892a4";
  return (
    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
      <span
        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: color }}
      />
      {lang}
    </span>
  );
}

interface ProjectsProps {
  repos: GithubRepo[];
}

export function Projects({ repos }: ProjectsProps) {
  return (
    <section id="projects" className="relative py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted text-muted-foreground text-xs font-medium mb-6">
            <FolderGit2 className="w-3 h-3" />
            <span>Open source</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            What we&apos;ve{" "}
            <span className="gradient-text">shipped</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-lg">
            Real projects, live on GitHub. Built late at night, refined over time.
          </p>
        </div>

        {repos.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <FolderGit2 className="w-10 h-10 mx-auto mb-3 opacity-40" />
            <p>Projects are loading or unavailable right now.</p>
            <a
              href="https://github.com/2AMDevs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline text-sm mt-2 inline-block"
            >
              Browse directly on GitHub →
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo, i) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card rounded-2xl p-5 flex flex-col gap-3 group fade-up fade-up-delay-${Math.min(i + 1, 5)}`}
              >
                {/* Repo header */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <FolderGit2 className="w-4 h-4 text-accent" />
                    </div>
                    <h3 className="font-semibold text-sm truncate group-hover:text-accent transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                  {repo.description ?? "No description provided."}
                </p>

                {/* Topics */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-accent/10 text-accent border border-accent/20"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-1 border-t border-border">
                  <LanguageDot lang={repo.language} />
                  <div className="flex items-center gap-3 text-muted-foreground">
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1 text-xs">
                        <Star className="w-3 h-3" />
                        {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1 text-xs">
                        <GitFork className="w-3 h-3" />
                        {repo.forks_count}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* View all */}
        <div className="text-center mt-10 fade-up">
          <a
            href="https://github.com/2AMDevs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            View all repositories on GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
