/**
 * Copyright (c) 2026 Cole Hoffman
 * Licensed under MIT License - see LICENSE file for details
 *
 * Component: Nav.tsx
 * Purpose: Minimal sticky navigation with section anchors
 */

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Problems", href: "#systems" },
  { label: "Proof", href: "#impact" },
  { label: "Projects", href: "#building" },
  { label: "Connect", href: "#connect" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base/90 backdrop-blur-sm border-b border-medium/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
        <a href="#" className="flex items-center gap-4">
          <Image
            src="/masthead_logo_transparent.png"
            alt="CH monogram"
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <span className="font-[family-name:var(--font-playfair)] text-text text-xl tracking-[0.2em] uppercase">
            Cole Hoffman
          </span>
        </a>
        <div className="flex gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-dim text-xs tracking-[0.15em] uppercase hover:text-text transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
