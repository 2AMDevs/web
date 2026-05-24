"use client";

import { motion } from "framer-motion";
import { ArrowDown, GitBranch, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Ambient background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Orbs */}
      <div
        className="orb w-[600px] h-[600px] top-[-200px] left-[-200px] pulse-slow"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="orb w-[500px] h-[500px] bottom-[-100px] right-[-100px] pulse-slow"
        style={{
          background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-medium mb-8"
        >
          <Zap className="w-3 h-3" />
          <span>Two devs. Real problems. Clean code.</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none mb-6"
        >
          <span className="block text-foreground">2AM</span>
          <span className="block gradient-text">Developers</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          We don&apos;t sleep until the problem&apos;s solved.
          <br className="hidden sm:block" />
          Two engineers. Infinite curiosity. Real impact.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-medium text-sm hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg"
            style={{ boxShadow: "0 4px 24px rgba(99,102,241,0.3)" }}
          >
            View Our Work
          </a>
          <a
            href="https://github.com/2AMDevs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card hover:bg-card-hover hover:border-accent text-sm font-medium transition-all duration-200"
          >
            <GitBranch className="w-4 h-4" />
            GitHub Org
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card hover:bg-card-hover hover:border-accent text-sm font-medium transition-all duration-200"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
        <ArrowDown className="w-4 h-4 float-animation" />
      </motion.div>
    </section>
  );
}
