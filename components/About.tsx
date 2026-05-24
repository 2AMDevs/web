"use client";

import {
  Code2,
  Cpu,
  ExternalLink,
  GitBranch,
  Globe,
  MapPin,
  Rocket,
  Users,
} from "lucide-react";
import Image from "next/image";
import type { GithubUserProfile } from "@/lib/github";

const values = [
  {
    icon: Code2,
    title: "Code that ships",
    description:
      "We build things that work in production, not just in demos. Every line serves a purpose.",
  },
  {
    icon: Cpu,
    title: "Real problems",
    description:
      "No solution looking for a problem. We start with the pain and work backwards to the code.",
  },
  {
    icon: Rocket,
    title: "Fast & focused",
    description:
      "Small team, zero bureaucracy. We move fast, iterate, and learn from what we build.",
  },
];

function TeamCard({ member, index }: { member: GithubUserProfile; index: number }) {
  const website =
    member.blog && !member.blog.startsWith("http")
      ? `https://${member.blog}`
      : member.blog;

  const delayClass = index === 0 ? "fade-up-delay-1" : "fade-up-delay-2";

  return (
    <div className={`glass-card rounded-2xl overflow-hidden fade-up ${delayClass}`}>
      {/* Top accent strip */}
      <div
        className="h-0.5 w-full"
        style={{
          background:
            index === 0
              ? "linear-gradient(90deg, #6366f1, #a78bfa)"
              : "linear-gradient(90deg, #a78bfa, #c084fc)",
        }}
      />

      <div className="p-6">
        {/* Avatar + name row */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative flex-shrink-0">
            <Image
              src={member.avatar_url}
              alt={member.name ?? member.login}
              width={64}
              height={64}
              className="w-16 h-16 rounded-2xl ring-2 ring-accent/20 object-cover"
            />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-lg leading-tight">
              {member.name ?? member.login}
            </h3>
            <p className="text-sm text-accent font-mono">@{member.login}</p>
            <div className="mt-1">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[11px] font-medium border border-accent/20">
                Co-founder · 2AM Devs
              </span>
            </div>
          </div>
        </div>

        {/* Bio */}
        {member.bio && (
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {member.bio}
          </p>
        )}

        {/* Meta info */}
        <div className="flex flex-col gap-1.5 mb-4">
          {member.location && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              <span>{member.location}</span>
            </div>
          )}
          {website && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Globe className="w-3 h-3 flex-shrink-0" />
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors truncate"
              >
                {member.blog}
              </a>
            </div>
          )}
        </div>

        {/* Footer links */}
        <div className="flex items-center gap-2 pt-4 border-t border-border">
          <a
            href={member.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-medium border border-border hover:border-accent hover:text-accent bg-card hover:bg-card-hover transition-all duration-200"
          >
            <GitBranch className="w-3.5 h-3.5" />
            GitHub
          </a>
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-medium border border-border hover:border-accent hover:text-accent bg-card hover:bg-card-hover transition-all duration-200"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

interface AboutProps {
  team: GithubUserProfile[];
}

export function About({ team }: AboutProps) {
  return (
    <section id="about" className="relative py-28 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted text-muted-foreground text-xs font-medium mb-6">
            <Users className="w-3 h-3" />
            <span>The team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Two devs.{" "}
            <span className="gradient-text">One mission.</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            We&apos;re a two-person studio that wakes up to build things that
            matter. No fluff, no filler — just code that solves real problems.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-20">
          {team.length > 0 ? (
            team.map((member, i) => (
              <TeamCard key={member.login} member={member} index={i} />
            ))
          ) : (
            [0, 1].map((i) => (
              <div key={i} className="glass-card rounded-2xl p-6 h-64 animate-pulse" />
            ))
          )}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16 max-w-2xl mx-auto fade-up">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground font-mono tracking-widest uppercase">
            what we stand for
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {values.map((value, i) => (
            <div
              key={value.title}
              className={`glass-card rounded-2xl p-6 fade-up fade-up-delay-${i + 1}`}
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                <value.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
