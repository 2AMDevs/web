"use client";

import {
  ArrowRight,
  Clock,
  FileCheck,
  MapPin,
  Radio,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";

const mechanics = [
  {
    icon: Clock,
    title: "Late-arrival penalty",
    desc: "15% fee per 30-min slot after a 10-min grace, capped at 100%. Half goes to the customer as wallet credit, half to a platform reliability fund.",
  },
  {
    icon: ShieldCheck,
    title: "Two-factor service flow",
    desc: 'Customer OTP starts the job, worker OTP ends it. GPS geofence (~100 m) gates the "arrived" state — no faking presence.',
  },
  {
    icon: FileCheck,
    title: "Append-only audit log",
    desc: "Every state transition, OTP issuance, and GPS ping is immutable. Full accountability, always.",
  },
  {
    icon: Radio,
    title: "Human dispatcher",
    desc: "Small worker pool, manual assignment. Dispatcher overrides are logged separately — a human in the loop where it counts.",
  },
  {
    icon: MapPin,
    title: "Geofenced arrival",
    desc: "GPS-verified check-in within 100 m of the job site. No phantom arrivals, no disputes.",
  },
  {
    icon: Wallet,
    title: "T+1 payouts",
    desc: "Workers get paid the next business day, every day. Reliability flows both ways.",
  },
];

export function UpcomingServices() {
  return (
    <section id="services" className="relative py-28 px-4 overflow-hidden">
      {/* Section background accent */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, var(--accent-glow), transparent)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted text-muted-foreground text-xs font-medium mb-6">
            <Sparkles className="w-3 h-3" />
            <span>What&apos;s next</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            More is{" "}
            <span className="gradient-text">coming</span>
          </h2>
        </div>

        {/* Main card */}
        <div className="rounded-3xl border border-accent/20 overflow-hidden fade-up fade-up-delay-1"
          style={{ background: "linear-gradient(135deg, var(--card) 0%, rgba(99,102,241,0.03) 100%)" }}
        >
          {/* Top accent strip */}
          <div
            className="h-1 w-full"
            style={{ background: "linear-gradient(90deg, #6366f1, #a78bfa, #c084fc)" }}
          />

          <div className="p-8 sm:p-10">
            {/* Title row */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold border border-accent/20 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Coming Soon
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Upright Services
                </h3>
                <p className="text-base text-muted-foreground mt-1">
                  A trust-first home services marketplace.
                </p>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-7 h-7 text-accent" />
              </div>
            </div>

            {/* Services chips */}
            <div className="flex flex-wrap gap-2 mb-6 mt-4">
              {["Plumber", "Electrician", "AC Repair", "Haircut", "Custom Requests"].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full border border-border text-xs text-muted-foreground bg-muted"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Why this exists */}
            <div className="rounded-2xl border border-border bg-muted/50 p-4 mb-8">
              <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2">
                The problem
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tier-3 cities don&apos;t lack workers — they lack accountability. The same plumber
                who shows up 2 hours late is the one a customer would gladly pay 20% more for
                if reliability was guaranteed.{" "}
                <span className="text-foreground font-medium">
                  Upright makes reliability the differentiator.
                </span>
              </p>
            </div>

            {/* Core mechanics grid */}
            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
              Core mechanics
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {mechanics.map((m) => (
                <div
                  key={m.title}
                  className="rounded-xl border border-border p-4 hover:border-accent/40 transition-colors"
                  style={{ background: "var(--card)" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <m.icon className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-xs font-semibold">{m.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
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
      </div>
    </section>
  );
}
