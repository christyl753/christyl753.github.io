"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutAndReceiptSection } from "@/components/AboutAndReceiptSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TimelineSection } from "@/components/TimelineSection";
import { ContactAndFooter } from "@/components/ContactAndFooter";

export function PortfolioApp() {
  const [simpleMode, setSimpleMode] = useState(false);

  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />
      <main>
        <HeroSection simpleMode={simpleMode} />
        <AboutAndReceiptSection
          simpleMode={simpleMode}
          onToggleSimpleMode={() => setSimpleMode((prev) => !prev)}
        />
        <ProjectsSection />
        <TimelineSection />
      </main>
      <ContactAndFooter />
    </div>
  );
}
