/**
 * Copyright (c) 2026 Cole Hoffman
 * Licensed under MIT License - see LICENSE file for details
 *
 * Component: Hero.tsx
 * Purpose: Header section with name, title, subtitles, contact info, and links
 */

"use client";

import ScrollReveal from "./ScrollReveal";

const links = [
  { label: "LinkedIn", href: "https://linkedin.com/in/connect2colehoffman" },
  { label: "GitHub", href: "https://github.com/csh-1997-eng" },
  { label: "Book a Meeting", href: "https://cal.com/csh-1997-eng" },
  { label: "The Margin", href: "https://the-margin.net" },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-5xl mx-auto">
      <ScrollReveal>
        <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-[0.04em] uppercase mb-6">
          Cole Hoffman
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p className="text-accent text-lg tracking-[0.1em] uppercase font-medium mb-8">
          Forward Deployed Applied AI Engineer
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="text-text text-lg leading-relaxed max-w-2xl mb-4">
          High ownership execution across ambiguous, high stakes problems
          spanning applied AI, product delivery, stakeholder management, and
          adoption.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <p className="text-dim text-base leading-relaxed max-w-2xl mb-8">
          Best fit for teams that need a builder who can find the wedge, work
          directly with users, ship quickly, and turn early momentum into
          durable systems.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="flex flex-wrap gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent text-sm tracking-wide hover:text-text transition-colors duration-200"
            >
              {link.label} &rarr;
            </a>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
