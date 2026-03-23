/**
 * Copyright (c) 2026 Cole Hoffman
 * Licensed under MIT License - see LICENSE file for details
 *
 * Component: ResumeCuts.tsx
 * Purpose: Resume download options with PDF links
 */

"use client";

import ScrollReveal from "./ScrollReveal";

const cuts = [
  {
    title: "Forward Deployed / Founding Engineer",
    description:
      "For teams that need founder-style execution, stakeholder ownership, product judgment, and technical range.",
    href: "/resume_fde_se_csh.pdf",
  },
  {
    title: "Quant / ML Systems",
    description:
      "For roles centered on research systems, quantitative modeling, MLOps, and investment infrastructure.",
    href: "/resume_qde_csh.pdf",
  },
  {
    title: "Ad Hoc Consulting",
    description:
      "Engagement pricing, scope tiers, and terms for consulting and contract work.",
    href: "/the_margin_group_rate_card.pdf",
  },
];

export default function ResumeCuts() {
  return (
    <section id="resume" className="px-6 py-24 max-w-5xl mx-auto">
      <ScrollReveal>
        <p className="text-light text-xs tracking-[0.15em] uppercase mb-3">
          Best fit
        </p>
        <p className="text-dim text-sm mb-12">
          Founding engineer, forward deployed engineer, applied AI lead, and
          quant ML systems roles.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {cuts.map((cut, i) => (
          <ScrollReveal key={cut.title} delay={i * 0.05}>
            <div className="border border-medium/20 rounded-sm p-6">
              <h3 className="text-text font-medium text-base mb-3">
                {cut.title}
              </h3>
              <p className="text-dim text-sm leading-relaxed mb-6">
                {cut.description}
              </p>
              <a
                href={cut.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm hover:text-text transition-colors duration-200"
              >
                Open PDF &rarr;
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
