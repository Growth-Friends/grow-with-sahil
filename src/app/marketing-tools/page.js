import SearchBarContainer from "@/components/SearchBar/SearchBarContainer";
import SubHeroSection from "@/components/SubHeroSection/SubHeroSection";
import ToolsWrapper from "@/components/ToolsComponent/ToolsWrapper/ToolsWrapper";
import React from "react";

function MarketingToolsPage() {
  return (
    <>
      <SubHeroSection marketingTools={true} />
      <SearchBarContainer tools={true} />
      <ToolsWrapper />
    </>
  );
}

export default MarketingToolsPage;
