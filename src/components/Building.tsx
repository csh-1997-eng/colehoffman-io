/**
 * Copyright (c) 2026 Cole Hoffman
 * Licensed under MIT License - see LICENSE file for details
 *
 * Component: Building.tsx
 * Purpose: Independent projects section
 */

"use client";

import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    name: "Machiavelliam",
    description:
      "AI poker coaching app (Flutter + GenAI). Trains decision-making under uncertainty, not memorization.",
    link: "https://github.com/csh-1997-eng/machiavelliam_mobile",
  },
  {
    name: "Elev8 Prototype",
    description:
      "Polymarket + Reddit social platform. Building with a cofounder. Link to the barebones MVP.",
    link: "https://github.com/csh-1997-eng/elev8-prototype",
  },
  {
    name: "gis-phl",
    description:
      "A repository for exploring geospatial applications to help the city of Philadelphia.",
    link: "https://github.com/csh-1997-eng/gis-phl",
  },
];

export default function Building() {
  return (
    <section id="building" className="px-6 py-24 max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4vw,3rem)] mb-16 tracking-wide">
          What I&apos;m Building
        </h2>
      </ScrollReveal>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <ScrollReveal key={project.name} delay={i * 0.05}>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <h3 className="text-text font-medium text-base whitespace-nowrap">
                {project.name}
              </h3>
              <p className="text-dim text-sm leading-relaxed">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-sm whitespace-nowrap hover:text-text transition-colors duration-200"
                >
                  GitHub &rarr;
                </a>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
