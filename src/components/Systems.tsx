/**
 * Copyright (c) 2026 Cole Hoffman
 * Licensed under MIT License - see LICENSE file for details
 *
 * Component: Systems.tsx
 * Purpose: Signature systems cards with Problem/Solution/Outcome/Why structure
 */

"use client";

import ScrollReveal from "./ScrollReveal";

const systems = [
  {
    title: "MBS Prepayment Modeling",
    problem:
      "The firm was paying for YieldBook licenses to model conditional prepayment rates.",
    solution:
      "Built TB scale data pipelines and ran experiments across CatBoost, XGBoost, and TensorFlow.",
    outcome:
      "Delivered a 20 model ensemble that beat the incumbent vendor in 18 months, tied to a $50M+ annual alpha opportunity.",
    why: "Replaced a paid external dependency with a stronger internal modeling capability tied directly to trading decisions and alpha generation.",
    tags: ["CatBoost", "XGBoost", "TensorFlow", "MLflow", "SHAP"],
  },
  {
    title: "Fund Cash Flow Forecasting",
    problem:
      "A custom TensorFlow and Keras model lived across five notebooks with a five day training cycle.",
    solution:
      "Re architected the workflow into two SageMaker pipelines for production inference and distributed backtesting, with processing rewritten in Polars.",
    outcome:
      "Ran 360 models in parallel, completed a full 1996 to 2024 backtest in four days, and supported forecasts across 28K products and 36 brands.",
    why: "Converted a slow research workflow into production grade infrastructure that improved speed, scale, and decision support.",
    tags: ["TensorFlow", "Keras", "SageMaker", "Polars"],
  },
  {
    title: "SEC 10-K RAG Platform",
    problem:
      "Portfolio managers needed a faster way to work across SEC filings by company, year, quarter, and section.",
    solution:
      "Built end to end EDGAR ingestion, SEC XML parsing, vector storage in Pinecone, and LLM powered retrieval with intelligent query decomposition.",
    outcome:
      "Handed the platform off to the ML engineering team for production scaling and drove adoption across 5+ teams.",
    why: "Turned unstructured filings into a usable research workflow and created reusable infrastructure for broader internal adoption.",
    tags: ["RAG", "Pinecone", "EDGAR", "Internal GTM"],
  },
  {
    title: "GenAI Interpretability Layer",
    problem:
      "Researchers were losing days to manual experiment interpretation and hypothesis review.",
    solution:
      "Built an agentic system that ingests evaluation metrics, SHAP outputs, pipeline code, and researcher axioms, then produces executive ready reports and structured review workflows.",
    outcome:
      "Improved research velocity and was adopted across a 14 person research team.",
    why: "Compressed manual interpretation work into a repeatable system that improved research speed, clarity, and team-wide consistency.",
    tags: [
      "AWS Bedrock",
      "Agentic workflows",
      "Interpretability",
      "Research enablement",
    ],
  },
];

export default function Systems() {
  return (
    <section id="systems" className="px-6 py-24 max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4vw,3rem)] mb-16 tracking-wide">
          Signature Systems
        </h2>
      </ScrollReveal>

      <div className="space-y-16">
        {systems.map((system, i) => (
          <ScrollReveal key={system.title} delay={i * 0.05}>
            <div className="border-l-2 border-accent/30 pl-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-6">
                {system.title}
              </h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  <span className="text-light uppercase tracking-wider text-xs">
                    Problem
                  </span>
                  <br />
                  <span className="text-dim">{system.problem}</span>
                </p>
                <p>
                  <span className="text-light uppercase tracking-wider text-xs">
                    Solution
                  </span>
                  <br />
                  <span className="text-dim">{system.solution}</span>
                </p>
                <p>
                  <span className="text-light uppercase tracking-wider text-xs">
                    Outcome
                  </span>
                  <br />
                  <span className="text-text">{system.outcome}</span>
                </p>
                <p>
                  <span className="text-light uppercase tracking-wider text-xs">
                    Why it matters
                  </span>
                  <br />
                  <span className="text-dim">{system.why}</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {system.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-light border border-medium/40 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
