import ResourcesComponent from "@/components/ResourcesComponent/ResourcesComponent";
import SearchBarContainer from "@/components/SearchBar/SearchBarContainer";
import SubHeroSection from "@/components/SubHeroSection/SubHeroSection";
import { getComponentText } from "@/utils/functions/functions";
import React from "react";

function growthResourcesPage() {
  const content = getComponentText("growth-resources");
  return (
    <>
      <SubHeroSection content={content} />
      <SearchBarContainer resources={true} />
      <ResourcesComponent />
    </>
  );
}

export default growthResourcesPage;
