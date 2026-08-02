import { HeroSection } from "@/components/sections/hero/HeroSection";
import { FeaturedProjects } from "@/components/sections/projects/FeaturedProjects";
import { GitHubDashboard } from "@/components/sections/github/GitHubDashboard";
import { CallToAction } from "@/components/sections/cta/CallToAction";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <FeaturedProjects />

      <GitHubDashboard />

      <CallToAction />

      
    </>
  );
}