import AboutMeSection from "@/components/AboutMeSection/AboutMeSection";
import DetailSection from "@/components/DetailSection/DetailSection";
import GrowthResourceDownload from "@/components/GrowthResourceDownload/GrowthResourceDownload";
import MoreResources from "@/components/ResourcesComponent/MoreResources/MoreResources";
import SubHeroSection from "@/components/SubHeroSection/SubHeroSection";
import React from "react";

function IndividualGrowthResourcesPage() {
  return (
    <>
      <SubHeroSection growthResources={true} />
      <GrowthResourceDownload />
      <DetailSection />
      <MoreResources moreResources={true} />
      <AboutMeSection />
    </>
  );
}

export default IndividualGrowthResourcesPage;
