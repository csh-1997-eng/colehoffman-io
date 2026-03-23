/**
 * Copyright (c) 2026 Cole Hoffman
 * Licensed under MIT License - see LICENSE file for details
 *
 * Component: Toolbox.tsx
 * Purpose: Core toolbox tag/pill cloud organized by category
 */

"use client";

import ScrollReveal from "./ScrollReveal";

const categories = [
  {
    label: "Languages & Frameworks",
    tools: ["Python", "SQL", "R", "TypeScript", "Next.js"],
  },
  {
    label: "ML/AI",
    tools: [
      "TensorFlow", "CatBoost", "XGBoost", "scikit-learn", "SHAP",
      "Time series forecasting", "Survival modeling",
    ],
  },
  {
    label: "Domain",
    tools: ["Factor modeling", "Portfolio optimization", "Risk modeling"],
  },
  {
    label: "Cloud & Infrastructure",
    tools: [
      "SageMaker", "AWS Bedrock", "MLflow", "Azure OpenAI",
      "RAG", "Agentic workflows", "Pinecone", "Qdrant",
    ],
  },
  {
    label: "Data",
    tools: [
      "Polars", "Spark", "EMR", "Glue", "Athena", "S3", "Postgres", "GeoPandas",
    ],
  },
  {
    label: "DevOps",
    tools: ["Docker", "Terraform", "CI/CD"],
  },
  {
    label: "Creative",
    tools: ["Unreal Engine", "Blender"],
  },
];

export default function Toolbox() {
  return (
    <section id="toolbox" className="px-6 py-24 max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4vw,3rem)] mb-16 tracking-wide">
          Core Toolbox
        </h2>
      </ScrollReveal>

      <div className="space-y-10">
        {categories.map((cat, i) => (
          <ScrollReveal key={cat.label} delay={i * 0.05}>
            <p className="text-light text-xs tracking-[0.15em] uppercase mb-4">
              {cat.label}
            </p>
            <div className="flex flex-wrap gap-3">
              {cat.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-sm text-dim border border-medium/30 px-4 py-2 rounded-full hover:text-text hover:border-medium/60 transition-colors duration-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
