/**
 * Copyright (c) 2026 Cole Hoffman
 * Licensed under MIT License - see LICENSE file for details
 *
 * Component: LookingFor.tsx
 * Purpose: What I'm Looking For and Not a Fit sections
 */

"use client";

import ScrollReveal from "./ScrollReveal";

const wants = [
  "I want to own outcomes, not just write code",
  "I want to be close to customers and revenue",
  "I want to build things that ship and get used",
];

const notAFit = [
  "Staff augmentation without ownership",
  "Pure research with no production path",
  "Isolated modeling work without product integration",
];

export default function LookingFor() {
  return (
    <section id="looking-for" className="px-6 py-24 max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4vw,3rem)] mb-8 tracking-wide">
          What I&apos;m Looking For
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p className="text-text text-lg leading-relaxed max-w-3xl mb-8">
          Founding engineer, forward deployed engineer, applied AI lead, and
          quant ML systems roles at high-growth companies building in hard
          industries.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <ul className="space-y-3 mb-20">
          {wants.map((item) => (
            <li key={item} className="text-dim text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.5rem,3vw,2rem)] mb-8 tracking-wide">
          Not a Fit
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <ul className="space-y-3">
          {notAFit.map((item) => (
            <li key={item} className="text-light text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </section>
  );
}
