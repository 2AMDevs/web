"use client";

import { useActionState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MessageSquare, Send, XCircle } from "lucide-react";
import { sendContactMessage, type ContactState } from "@/app/actions/contact";
import { cn } from "@/lib/utils";

const initialState: ContactState = {};

export function Contact() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <section id="contact" className="relative py-28 px-4 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 100%, var(--accent-glow), transparent)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted text-muted-foreground text-xs font-medium mb-6">
            <MessageSquare className="w-3 h-3" />
            <span>Let&apos;s talk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Start a{" "}
            <span className="gradient-text">conversation</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-lg">
            Have a problem worth solving? We&apos;d love to hear about it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          {/* Info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Drop us a message</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fill out the form and we&apos;ll get back to you within 24 hours.
                We read everything and reply to everyone.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="font-mono text-xs text-muted-foreground leading-loose">
                <span className="text-accent">$</span> ping 2am.dev<br />
                <span className="text-green-400">64 bytes received: latency &lt; 24h</span><br />
                <span className="text-accent">$</span> status<br />
                <span className="text-green-400">● open_to_work: true</span><br />
                <span className="text-green-400">● taking_projects: true</span><br />
                <span className="text-accent cursor-blink">▊</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form ref={formRef} action={formAction} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    maxLength={100}
                    placeholder="Jane Doe"
                    className={cn(
                      "w-full px-4 py-3 rounded-xl text-sm",
                      "bg-card border border-border",
                      "placeholder:text-muted-foreground/50",
                      "focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent",
                      "transition-all duration-200",
                      "disabled:opacity-50 disabled:cursor-not-allowed"
                    )}
                    disabled={isPending}
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    placeholder="jane@example.com"
                    className={cn(
                      "w-full px-4 py-3 rounded-xl text-sm",
                      "bg-card border border-border",
                      "placeholder:text-muted-foreground/50",
                      "focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent",
                      "transition-all duration-200",
                      "disabled:opacity-50 disabled:cursor-not-allowed"
                    )}
                    disabled={isPending}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={5}
                  placeholder="Tell us about your project or problem..."
                  className={cn(
                    "w-full px-4 py-3 rounded-xl text-sm",
                    "bg-card border border-border",
                    "placeholder:text-muted-foreground/50",
                    "focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent",
                    "transition-all duration-200 resize-none",
                    "disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                  disabled={isPending}
                />
              </div>

              {/* Status messages */}
              {state.success && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  Message sent! We&apos;ll get back to you soon.
                </motion.div>
              )}

              {state.error && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                >
                  <XCircle className="w-4 h-4 flex-shrink-0" />
                  {state.error}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className={cn(
                  "w-full flex items-center justify-center gap-2",
                  "px-6 py-3.5 rounded-xl font-medium text-sm",
                  "bg-accent text-white",
                  "hover:opacity-90 active:scale-95",
                  "disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100",
                  "transition-all duration-200",
                  "shadow-lg"
                )}
                style={{ boxShadow: "0 4px 24px rgba(99,102,241,0.3)" }}
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
