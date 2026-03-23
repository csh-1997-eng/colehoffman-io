/**
 * Copyright (c) 2026 Cole Hoffman
 * Licensed under MIT License - see LICENSE file for details
 *
 * Component: Footer.tsx
 * Purpose: Minimal footer with name, year, and links
 */

const footerLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/connect2colehoffman" },
  { label: "GitHub", href: "https://github.com/csh-1997-eng" },
  { label: "X", href: "https://x.com/lordcolton_exe" },
  { label: "YouTube", href: "https://youtube.com/@lordcolton.mp3" },
];

export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-medium/20 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <p className="text-light text-xs">
            Cole Hoffman &copy; {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light text-xs hover:text-dim transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
