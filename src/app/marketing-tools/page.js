import SearchBarContainer from "@/components/SearchBar/SearchBarContainer";
import SubHeroSection from "@/components/SubHeroSection/SubHeroSection";
import ToolsWrapper from "@/components/ToolsComponent/ToolsWrapper/ToolsWrapper";
import React from "react";

function MarketingToolsPage() {
  return (
    <>
      <SubHeroSection />
      <SearchBarContainer tools={true} />
      <ToolsWrapper />
    </>
  );
}

export default MarketingToolsPage;
