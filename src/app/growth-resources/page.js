import ResourcesComponent from "@/components/ResourcesComponent/ResourcesComponent";
import SearchBarContainer from "@/components/SearchBar/SearchBarContainer";
import SubHeroSection from "@/components/SubHeroSection/SubHeroSection";
import React from "react";

function growthResourcesPage() {
  return (
    <>
      <SubHeroSection />
      <SearchBarContainer resources={true} />
      <ResourcesComponent />
    </>
  );
}

export default growthResourcesPage;
