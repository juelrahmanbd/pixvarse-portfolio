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

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "WordPress Development",
    budget: "$1,000 – $3,000",
    timeline: "Within 1 Month",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const projectTypes = [
    "WordPress Development",
    "Divi / Elementor Website",
    "Custom Web Application",
    "Laravel / SaaS Backend",
    "React / Frontend Engineering",
    "Website Maintenance & Speed",
    "Agency White-Label Partnership",
    "Other / Advisory",
  ];

  const budgetRanges = [
    "< $1,000 (Small Task / Audit)",
    "$1,000 – $3,000 (Standard Website)",
    "$3,000 – $5,000 (Custom Build / App)",
    "$5,000+ (Enterprise / Retainer)",
  ];

  const timelines = [
    "Immediate (Urgent)",
    "Within 2–4 Weeks",
    "Within 1–2 Months",
    "Flexible / Exploring",
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = "Please provide your name or business name.";
    }
    if (!formData.email.trim()) {
      errs.email = "Please provide your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = "Please describe your project in at least 15 characters.";
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

    // Launch mailto link automatically so client email opens with full details
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
    <div className="rounded-sm bg-white border border-[#2C4058]/15 p-6 sm:p-10 shadow-[4px_4px_0px_0px_#2C4058]">
      {isSubmitted ? (
        <div className="space-y-6 text-center py-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-sm bg-[#EEF3E6] border border-[#2C4058]/20 text-[#738B46] shadow-[2px_2px_0px_0px_#2C4058]">
            <CheckCircle2 className="h-8 w-8 text-[#738B46]" />
          </div>

          <h3 className="text-2xl font-black text-[#2C4058]">
            Inquiry Prepared &amp; Email Triggered!
          </h3>

          <p className="text-sm sm:text-base text-[#2C4058]/80 max-w-lg mx-auto leading-relaxed font-sans">
            Your default email client should have opened with your project inquiry pre-filled. If it didn&apos;t open automatically, use the buttons below:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={generateMailtoUrl()}
              className="inline-flex items-center gap-2 rounded-sm bg-[#738B46] px-5 py-2.5 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white border-2 border-[#2C4058] shadow-[3px_3px_0px_0px_#2C4058] hover:bg-[#2C4058] transition-all hover:translate-x-[1px] hover:translate-y-[1px]"
            >
              <Mail className="h-4 w-4" />
              <span>Open in Email Client</span>
            </a>

            <button
              onClick={copyEmailToClipboard}
              className="inline-flex items-center gap-2 rounded-sm bg-[#F7F9FA] px-5 py-2.5 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#2C4058] border-2 border-[#2C4058]/30 hover:border-[#2C4058] hover:bg-[#EEF3E6] transition-all cursor-pointer"
            >
              <Copy className="h-4 w-4" />
              <span>{copied ? "Copied!" : "Copy Email Address"}</span>
            </button>
          </div>

          <div className="pt-6 border-t border-[#2C4058]/10">
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs font-mono font-bold text-[#738B46] hover:underline cursor-pointer"
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
                className="block text-xs font-mono font-bold uppercase tracking-wider text-[#2C4058] mb-2"
              >
                Your Name / Business *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Sarah Jenkins or Apex Agency"
                className={`w-full rounded-sm border-2 bg-[#F7F9FA] px-4 py-3 text-sm text-[#2C4058] placeholder:text-[#2C4058]/40 focus:bg-white focus:outline-none focus:border-[#2C4058] focus:ring-2 focus:ring-[#738B46] transition-colors ${
                  errors.name ? "border-rose-500 bg-rose-50/30" : "border-[#2C4058]/20"
                }`}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-rose-600 font-sans flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono font-bold uppercase tracking-wider text-[#2C4058] mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="sarah@company.com"
                className={`w-full rounded-sm border-2 bg-[#F7F9FA] px-4 py-3 text-sm text-[#2C4058] placeholder:text-[#2C4058]/40 focus:bg-white focus:outline-none focus:border-[#2C4058] focus:ring-2 focus:ring-[#738B46] transition-colors ${
                  errors.email ? "border-rose-500 bg-rose-50/30" : "border-[#2C4058]/20"
                }`}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-rose-600 font-sans flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" />
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
                className="block text-xs font-mono font-bold uppercase tracking-wider text-[#2C4058] mb-2"
              >
                Project Type
              </label>
              <select
                id="projectType"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full rounded-sm border-2 border-[#2C4058]/20 bg-[#F7F9FA] px-4 py-3 text-sm text-[#2C4058] focus:bg-white focus:outline-none focus:border-[#2C4058] focus:ring-2 focus:ring-[#738B46] transition-colors"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="budget"
                className="block text-xs font-mono font-bold uppercase tracking-wider text-[#2C4058] mb-2"
              >
                Estimated Budget
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full rounded-sm border-2 border-[#2C4058]/20 bg-[#F7F9FA] px-4 py-3 text-sm text-[#2C4058] focus:bg-white focus:outline-none focus:border-[#2C4058] focus:ring-2 focus:ring-[#738B46] transition-colors"
              >
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
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
              className="block text-xs font-mono font-bold uppercase tracking-wider text-[#2C4058] mb-2"
            >
              Desired Timeline
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {timelines.map((time) => (
                <button
                  type="button"
                  key={time}
                  onClick={() => setFormData({ ...formData, timeline: time })}
                  className={`px-3 py-2 text-xs font-mono font-bold rounded-sm border-2 text-center transition-all cursor-pointer ${
                    formData.timeline === time
                      ? "bg-[#2C4058] text-white border-[#2C4058] shadow-[2px_2px_0px_0px_#738B46]"
                      : "bg-[#F7F9FA] text-[#2C4058]/70 border-[#2C4058]/20 hover:bg-[#EEF3E6] hover:text-[#2C4058]"
                  }`}
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
              className="block text-xs font-mono font-bold uppercase tracking-wider text-[#2C4058] mb-2"
            >
              Project Details &amp; Objectives *
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your project, website goals, target audience, technical preferences, or existing website URL..."
              className={`w-full rounded-sm border-2 bg-[#F7F9FA] px-4 py-3 text-sm text-[#2C4058] placeholder:text-[#2C4058]/40 focus:bg-white focus:outline-none focus:border-[#2C4058] focus:ring-2 focus:ring-[#738B46] transition-colors ${
                errors.message ? "border-rose-500 bg-rose-50/30" : "border-[#2C4058]/20"
              }`}
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-rose-600 font-sans flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" />
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
              icon={<Send className="h-4 w-4" />}
            >
              Send Project Inquiry
            </Button>
            <p className="mt-3 text-xs text-[#2C4058]/60 font-mono">
              Generates a verified message to {siteConfig.email}. Guaranteed reply within 24 hours.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
