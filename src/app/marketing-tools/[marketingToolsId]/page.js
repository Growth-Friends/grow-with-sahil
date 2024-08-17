import AboutMeSection from "@/components/AboutMeSection/AboutMeSection";
import DetailSection from "@/components/DetailSection/DetailSection";
import DummyToolsSection from "@/components/DummyToolsSection/DummyToolsSection";
import MoreResources from "@/components/ResourcesComponent/MoreResources/MoreResources";
import SubHeroSection from "@/components/SubHeroSection/SubHeroSection";
import React from "react";

function IndividualMarketingToolsPage() {
  return (
    <>
      <SubHeroSection />
      <DummyToolsSection />
      <DetailSection />
      <MoreResources moreTools={true} />
      <AboutMeSection />
    </>
  );
}

export default IndividualMarketingToolsPage;
