/**
 * Copyright (c) 2026 Cole Hoffman
 * Licensed under MIT License - see LICENSE file for details
 *
 * Component: page.tsx
 * Purpose: Main page composing all sections for the hiring funnel site
 */

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ResumeCuts from "@/components/ResumeCuts";
import Impact from "@/components/Impact";
import Systems from "@/components/Systems";
import Career from "@/components/Career";
import Building from "@/components/Building";
import Toolbox from "@/components/Toolbox";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ResumeCuts />
        <Impact />
        <Systems />
        <Career />
        <Building />
        <Toolbox />
      </main>
      <Footer />
    </>
  );
}
