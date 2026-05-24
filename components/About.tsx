"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Rocket, Users } from "lucide-react";
import Image from "next/image";
import type { GithubMember } from "@/lib/github";

const values = [
  {
    icon: Code2,
    title: "Code that ships",
    description: "We build things that work in production, not just in demos. Every line serves a purpose.",
  },
  {
    icon: Cpu,
    title: "Real problems",
    description: "No solution looking for a problem. We start with the pain and work backwards to the code.",
  },
  {
    icon: Rocket,
    title: "Fast & focused",
    description: "Small team, zero bureaucracy. We move fast, iterate, and learn from what we build.",
  },
];

interface AboutProps {
  members: GithubMember[];
}

export function About({ members }: AboutProps) {
  return (
    <section id="about" className="relative py-28 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted text-muted-foreground text-xs font-medium mb-6">
            <Users className="w-3 h-3" />
            <span>The team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Two devs.{" "}
            <span className="gradient-text">One mission.</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            We&apos;re a two-person studio that wakes up to build things that matter.
            No fluff, no filler — just code that solves real problems.
          </p>
        </motion.div>

        {/* Team cards */}
        {members.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            {members.slice(0, 2).map((member, i) => (
              <motion.a
                key={member.login}
                href={member.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                className="glass-card rounded-2xl p-5 flex items-center gap-4 min-w-[240px]"
              >
                <Image
                  src={member.avatar_url}
                  alt={member.login}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-xl ring-2 ring-accent/20"
                />
                <div>
                  <p className="font-semibold text-sm">@{member.login}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Co-founder · 2AM Devs</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                <value.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
