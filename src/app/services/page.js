import ExpertSection from "@/components/ExpertSection/ExpertSection";
import SubHeroSection from "@/components/SubHeroSection/SubHeroSection";
import { getComponentText } from "@/utils/functions/functions";
import React from "react";

function ServicesPage() {
  const content = getComponentText("services");
  return (
    <>
      <SubHeroSection content={content} />
      <ExpertSection />
    </>
  );
}

export default ServicesPage;
