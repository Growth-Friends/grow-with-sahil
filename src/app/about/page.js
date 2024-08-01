import ExpertSection from "@/components/ExpertSection/ExpertSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import React from "react";

function About() {
  return (
    <>
      <HeroSection about={true} />
      <ExpertSection about={true} />
      <div className="bg-black h-[450px] " />
    </>
  );
}

export default About;
