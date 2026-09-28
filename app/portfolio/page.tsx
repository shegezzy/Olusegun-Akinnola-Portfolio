"use client";

import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import JobExperience from "@/components/Home/JobExperience";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GitHubSection from "@/components/sections/GitHubSection";
import LinkedInSection from "@/components/sections/LinkedInSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <JobExperience />
      <ProjectsSection />
      <TestimonialsSection />
      <GitHubSection />
      <LinkedInSection />
      <ContactSection />
    </>
  );
}
