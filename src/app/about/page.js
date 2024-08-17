import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import ExpertSection from "@/components/ExpertSection/ExpertSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import React from "react";

function About() {
  return (
    <>
      <HeroSection about={true} />
      <ExperienceSection />
      <ExpertSection about={true} />
    </>
  );
}

export default About;
