import ResourcesComponent from "@/components/ResourcesComponent/ResourcesComponent";
import SearchBarContainer from "@/components/SearchBar/SearchBarContainer";
import SubHeroSection from "@/components/SubHeroSection/SubHeroSection";
import React from "react";

function page() {
  return (
    <>
      <SubHeroSection growthResources={true} />
      <SearchBarContainer resources={true} />
      <ResourcesComponent />
      <div className="bg-black h-[450px] " />
    </>
  );
}

export default page;
