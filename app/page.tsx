"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import JobExperience from "@/components/Home/JobExperience";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GitHubSection from "@/components/sections/GitHubSection";
import LinkedInSection from "@/components/sections/LinkedInSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
      <div
        aria-hidden="true"
        className="follow-cursor"
        style={{ left: position.x, top: position.y }}
      />
    </>
  );
}
