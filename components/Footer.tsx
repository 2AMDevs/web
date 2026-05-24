import { GitBranch } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
            <span className="text-accent font-mono text-xs font-bold">2A</span>
          </div>
          <span className="text-sm font-semibold">
            2AM Developers
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground order-last sm:order-none">
          © {year} 2AM Developers. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a
            href="#about"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
          <a
            href="https://github.com/2AMDevs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <GitBranch className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Bottom tagline */}
      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-border text-center">
        <p className="text-xs font-mono text-muted-foreground/60">
          Built at 2AM. Shipped at dawn.
        </p>
      </div>
    </footer>
  );
}
