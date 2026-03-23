/**
 * Copyright (c) 2026 Cole Hoffman
 * Licensed under MIT License - see LICENSE file for details
 *
 * Component: Connect.tsx
 * Purpose: Links and connect section
 */

"use client";

import ScrollReveal from "./ScrollReveal";

const links = [
  { label: "Full Resume / Work", href: "https://the-margin.net/resume" },
  { label: "The Margin", href: "https://the-margin.net" },
  { label: "YouTube", href: "https://youtube.com/@lordcolton.mp3" },
  { label: "GitHub", href: "https://github.com/csh-1997-eng" },
  { label: "LinkedIn", href: "https://linkedin.com/in/connect2colehoffman" },
  { label: "Book a Meeting", href: "https://cal.com/csh-1997-eng" },
  { label: "X", href: "https://x.com/lordcolton_exe" },
];

export default function Connect() {
  return (
    <section id="connect" className="px-6 py-24 max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4vw,3rem)] mb-16 tracking-wide">
          Connect
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dim text-sm hover:text-accent transition-colors duration-200"
            >
              {link.label} &rarr;
            </a>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="text-light text-xs">
          Need a low-complexity version for locked-down corporate browsers?{" "}
          <a
            href="https://the-margin.net/recruiter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dim hover:text-text transition-colors duration-200"
          >
            the-margin.net/recruiter
          </a>
        </p>
      </ScrollReveal>
    </section>
  );
}
