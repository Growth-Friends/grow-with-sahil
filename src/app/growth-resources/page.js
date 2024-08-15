import ResourcesComponent from "@/components/ResourcesComponent/ResourcesComponent";
import SearchBarContainer from "@/components/SearchBar/SearchBarContainer";
import SubHeroSection from "@/components/SubHeroSection/SubHeroSection";
import React from "react";

function growthResourcesPage() {
  return (
    <>
      <SubHeroSection growthResources={true} />
      <SearchBarContainer resources={true} />
      <ResourcesComponent />
    </>
  );
}

export default growthResourcesPage;
