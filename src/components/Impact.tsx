/**
 * Copyright (c) 2026 Cole Hoffman
 * Licensed under MIT License - see LICENSE file for details
 *
 * Component: Impact.tsx
 * Purpose: Selected impact metric cards section
 */

"use client";

import ScrollReveal from "./ScrollReveal";

const metrics = [
  { value: "$50M+", description: "Annual alpha opportunity from MBS prepayment modeling" },
  { value: "28K", description: "Products forecasted across 36 brands" },
  { value: "<14 days", description: "Cloneable systematic investment pipeline delivered" },
  { value: "300x", description: "Backtesting workflow acceleration" },
  { value: "5", description: "Concurrent internal client engagements" },
  { value: "3", description: "Business units supported as an SME" },
];

export default function Impact() {
  return (
    <section id="impact" className="px-6 py-24 max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4vw,3rem)] mb-16 tracking-wide">
          Selected Impact
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {metrics.map((metric, i) => (
          <ScrollReveal key={metric.value} delay={i * 0.05}>
            <div>
              <p className="text-accent font-[family-name:var(--font-playfair)] text-4xl mb-3">
                {metric.value}
              </p>
              <p className="text-dim text-sm leading-relaxed">
                {metric.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
