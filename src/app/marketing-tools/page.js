import SearchBarContainer from "@/components/SearchBar/SearchBarContainer";
import SubHeroSection from "@/components/SubHeroSection/SubHeroSection";
import ToolsWrapper from "@/components/ToolsComponent/ToolsWrapper/ToolsWrapper";
import { getComponentText } from "@/utils/functions/functions";
import React from "react";

function MarketingToolsPage() {
  const content = getComponentText("marketing-tools");
  return (
    <>
      <SubHeroSection content={content} />
      <SearchBarContainer tools={true} />
      <ToolsWrapper />
    </>
  );
}

export default MarketingToolsPage;
