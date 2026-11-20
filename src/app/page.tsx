import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CompetenciesSection } from "@/components/CompetenciesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { GitHubStatsSection } from "@/components/GitHubStatsSection";
import { TimelineSection } from "@/components/TimelineSection";
import { ContactAndFooter } from "@/components/ContactAndFooter";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />
      <main>
        <HeroSection />
        <CompetenciesSection />
        <ProjectsSection />
        <GitHubStatsSection />
        <TimelineSection />
      </main>
      <ContactAndFooter />
    </div>
  );
}
