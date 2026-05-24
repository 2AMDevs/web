"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers, Lock, Sparkles, Zap } from "lucide-react";

const features = [
  { icon: Layers, text: "End-to-end product delivery" },
  { icon: Zap, text: "Fast, opinionated tech stacks" },
  { icon: Lock, text: "Security-first engineering" },
];

export function UpcomingServices() {
  return (
    <section id="services" className="relative py-28 px-4 overflow-hidden">
      {/* Section background accent */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, var(--accent-glow), transparent)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted text-muted-foreground text-xs font-medium mb-6">
            <Sparkles className="w-3 h-3" />
            <span>What&apos;s next</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            More is{" "}
            <span className="gradient-text">coming</span>
          </h2>
        </motion.div>

        {/* Upright Services card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative max-w-2xl mx-auto"
        >
          <div
            className="rounded-3xl border border-accent/20 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, var(--card) 0%, rgba(99,102,241,0.04) 100%)",
            }}
          >
            {/* Top accent strip */}
            <div
              className="h-1 w-full"
              style={{
                background: "linear-gradient(90deg, #6366f1, #a78bfa, #c084fc)",
              }}
            />

            <div className="p-8 sm:p-10">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold border border-accent/20 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Coming Soon
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    Upright Services
                  </h3>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-7 h-7 text-accent" />
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                A comprehensive suite of development services built for startups and
                businesses that need things done right — from MVP to production-grade
                infrastructure.
              </p>

              {/* Feature list */}
              <div className="flex flex-col gap-3 mb-8">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <f.icon className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="text-muted-foreground">{f.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all duration-200"
              >
                Get notified when we launch
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
