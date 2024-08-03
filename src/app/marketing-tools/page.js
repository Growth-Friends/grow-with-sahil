import SubHeroSection from "@/components/SubHeroSection/SubHeroSection";
import ToolsComponent from "@/components/ToolsComponent/ToolsComponent";
import React from "react";

function MarketingToolsPage() {
  return (
    <>
      <SubHeroSection />
      <ToolsComponent seoTools={true} />
      <ToolsComponent socialTools={true} />
      <ToolsComponent performanceTools={true} />
    </>
  );
}

export default MarketingToolsPage;
