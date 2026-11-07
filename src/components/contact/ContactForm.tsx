"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "../ui/Button";
import {
  Send,
  Mail,
  CheckCircle2,
  AlertCircle,
  Copy,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "WordPress Core Development",
    budget: "$1,000 – $3,000",
    timeline: "Within 1 Month",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const projectTypes = [
    "WordPress Core Development",
    "Divi / Elementor System",
    "Custom Web Application",
    "Laravel / SaaS Backend",
    "React / Frontend Engineering",
    "Website Maintenance & Speed",
    "Agency White-Label Partnership",
    "Other / Advisory",
  ];

  const budgetRanges = [
    "< $1,000 (Small Task / Audit)",
    "$1,000 – $3,000 (Standard Platform)",
    "$3,000 – $5,000 (Custom Architecture)",
    "$5,000+ (Enterprise / Retainer)",
  ];

  const timelines = [
    "Immediate (Urgent)",
    "Within 2–4 Weeks",
    "Within 1–2 Months",
    "Flexible / Scoping",
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = "Please provide your name or business identity.";
    }
    if (!formData.email.trim()) {
      errs.email = "Please provide your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = "Please describe your project objectives in at least 15 characters.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} — from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Juel,\n\nMy name is ${formData.name} (${formData.email}).\n\n` +
      `Project Type: ${formData.projectType}\n` +
      `Estimated Budget: ${formData.budget}\n` +
      `Desired Timeline: ${formData.timeline}\n\n` +
      `Project Details:\n${formData.message}\n\n` +
      `Sent via Pixvarse Studio Contact Portal`
    );
    return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const mailtoUrl = generateMailtoUrl();
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
      {isSubmitted ? (
        <div className="space-y-6 text-center py-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald shadow-glow-emerald">
            <CheckCircle2 className="h-8 w-8 text-cyber-emerald" strokeWidth={1.5} />
          </div>

          <h3 className="text-2xl font-display font-bold text-ink-headline">
            Inquiry Prepared &amp; Email Triggered!
          </h3>

          <p className="text-sm sm:text-base text-ink-secondary max-w-lg mx-auto leading-relaxed font-sans">
            Your default email client should have opened with your project inquiry pre-filled. If it didn&apos;t open automatically, use the buttons below:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={generateMailtoUrl()}
              className="inline-flex items-center gap-2 rounded-full bg-cyber-emerald px-6 py-3 text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-canvas shadow-glow-emerald hover:brightness-110 transition-all"
            >
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              <span>Open in Email Client</span>
            </a>

            <button
              onClick={copyEmailToClipboard}
              className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-6 py-3 text-xs sm:text-sm font-sans font-medium uppercase tracking-wider text-ink-headline border border-white/[0.12] hover:bg-white/[0.08] transition-all cursor-pointer"
            >
              <Copy className="h-4 w-4" strokeWidth={1.5} />
              <span>{copied ? "Copied!" : "Copy Email Address"}</span>
            </button>
          </div>

          <div className="pt-6 border-t border-white/[0.06]">
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs font-mono font-medium text-cyber-emerald hover:underline cursor-pointer"
            >
              ← Edit details or send another inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono uppercase tracking-wider text-ink-secondary mb-2"
              >
                Your Name / Business Identity *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Sarah Jenkins or Apex Agency"
                className={cn(
                  "w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-ink-headline placeholder:text-ink-muted/50 focus:bg-white/[0.05] focus:outline-none focus:border-cyber-emerald focus:ring-2 focus:ring-cyber-emerald/20 transition-all",
                  errors.name ? "border-rose-500 bg-rose-500/10" : "border-white/[0.1]"
                )}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-rose-400 font-sans flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" strokeWidth={1.5} />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono uppercase tracking-wider text-ink-secondary mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="sarah@company.com"
                className={cn(
                  "w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-ink-headline placeholder:text-ink-muted/50 focus:bg-white/[0.05] focus:outline-none focus:border-cyber-emerald focus:ring-2 focus:ring-cyber-emerald/20 transition-all",
                  errors.email ? "border-rose-500 bg-rose-500/10" : "border-white/[0.1]"
                )}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-rose-400 font-sans flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" strokeWidth={1.5} />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Project Type and Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="projectType"
                className="block text-xs font-mono uppercase tracking-wider text-ink-secondary mb-2"
              >
                Project Focus
              </label>
              <select
                id="projectType"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full rounded-xl border border-white/[0.1] bg-canvas-secondary px-4 py-3 text-sm text-ink-headline focus:outline-none focus:border-cyber-emerald focus:ring-2 focus:ring-cyber-emerald/20 transition-all"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type} className="bg-canvas text-ink-headline">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="budget"
                className="block text-xs font-mono uppercase tracking-wider text-ink-secondary mb-2"
              >
                Estimated Budget Range
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full rounded-xl border border-white/[0.1] bg-canvas-secondary px-4 py-3 text-sm text-ink-headline focus:outline-none focus:border-cyber-emerald focus:ring-2 focus:ring-cyber-emerald/20 transition-all"
              >
                {budgetRanges.map((range) => (
                  <option key={range} value={range} className="bg-canvas text-ink-headline">
                    {range}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 3: Desired Timeline */}
          <div>
            <label
              htmlFor="timeline"
              className="block text-xs font-mono uppercase tracking-wider text-ink-secondary mb-2"
            >
              Target Launch Timeline
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {timelines.map((time) => (
                <button
                  type="button"
                  key={time}
                  onClick={() => setFormData({ ...formData, timeline: time })}
                  className={cn(
                    "px-3 py-2.5 text-xs font-mono font-medium rounded-xl border text-center transition-all cursor-pointer",
                    formData.timeline === time
                      ? "bg-cyber-emerald text-canvas font-bold border-cyber-emerald shadow-glow-emerald"
                      : "bg-white/[0.03] text-ink-secondary border-white/[0.08] hover:bg-white/[0.07] hover:text-ink-headline"
                  )}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Row 4: Message / Details */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-mono uppercase tracking-wider text-ink-secondary mb-2"
            >
              Project Specifications &amp; Objectives *
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your architectural requirements, key goals, target timeline, or link to Figma/existing site..."
              className={cn(
                "w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-ink-headline placeholder:text-ink-muted/50 focus:bg-white/[0.05] focus:outline-none focus:border-cyber-emerald focus:ring-2 focus:ring-cyber-emerald/20 transition-all",
                errors.message ? "border-rose-500 bg-rose-500/10" : "border-white/[0.1]"
              )}
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-rose-400 font-sans flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" strokeWidth={1.5} />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              icon={<Send className="h-4 w-4" strokeWidth={1.5} />}
            >
              Transmit Project Inquiry
            </Button>
            <p className="mt-3 text-xs text-ink-muted font-mono">
              Direct founder review by Juel Rahman. Guaranteed reply within 24 business hours.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
