/**
 * Copyright (c) 2026 Cole Hoffman
 * Licensed under MIT License - see LICENSE file for details
 *
 * Component: Career.tsx
 * Purpose: Vertical timeline of career arc
 */

"use client";

import ScrollReveal from "./ScrollReveal";

const positions = [
  {
    period: "09/2024 to Present",
    title: "Senior Applied AI Engineer / Tech Lead",
    org: "Global Investment Systems, Vanguard",
    description:
      "Now leading high ambiguity applied AI work across research, product delivery, stakeholder management, and team execution.",
  },
  {
    period: "08/2023 to 09/2024",
    title: "Applied AI Engineer",
    org: "Global Investment Systems, Vanguard",
    description:
      "Shifted into internal consulting, turning research prototypes into production AI systems and stakeholder facing products.",
  },
  {
    period: "12/2022 to 08/2023",
    title: "Full-Stack Engineer",
    org: "Equity Investment Systems, Vanguard",
    description:
      "Expanded into product delivery with analytics platforms and benchmark tooling for portfolio managers.",
  },
  {
    period: "04/2022 to 11/2022",
    title: "Machine Learning Engineer",
    org: "Enterprise Advice, Vanguard",
    description:
      "Moved into applied ML with personalization, tax optimization, and early MLOps foundations.",
  },
  {
    period: "08/2021 to 04/2022",
    title: "Data Engineer",
    org: "Chief Data Analytics Office, Vanguard",
    description:
      "Built the data foundations: enterprise ETL, metadata systems, and compliance workflows at scale.",
  },
];

export default function Career() {
  return (
    <section id="career" className="px-6 py-24 max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4vw,3rem)] mb-4 tracking-wide">
          Career Arc
        </h2>
        <p className="text-dim text-sm mb-16">
          From data foundations to forward deployed applied AI leadership.
        </p>
      </ScrollReveal>

      <div className="space-y-0">
        {positions.map((pos, i) => (
          <ScrollReveal key={pos.period} delay={i * 0.05}>
            <div className="border-l-2 border-medium/30 pl-8 pb-12 last:pb-0 relative">
              <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-accent" />
              <p className="text-light text-xs tracking-wider uppercase mb-2">
                {pos.period}
              </p>
              <h3 className="text-text font-medium text-base mb-1">
                {pos.title}
              </h3>
              <p className="text-dim text-sm mb-2">{pos.org}</p>
              <p className="text-dim text-sm leading-relaxed">
                {pos.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
