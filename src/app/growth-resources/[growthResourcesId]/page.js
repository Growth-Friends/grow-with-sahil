import AboutMeSection from "@/components/AboutMeSection/AboutMeSection";
import MoreResources from "@/components/ResourcesComponent/MoreResources/MoreResources";
import React from "react";
import ResourcesToolsContainer from "@/components/ResourcesToolsContainer/ResourcesToolsContainer";

function IndividualGrowthResourcesPage({ params }) {
  return (
    <>
      {/* Render components only if data is present */}
      <ResourcesToolsContainer params={params} />
      <MoreResources moreResources={true} />
      <AboutMeSection />
    </>
  );
}

export default IndividualGrowthResourcesPage;

export const dynamicParams = false;
export const dynamic = "error";

// Function to generate static parameters for pre-rendering
export async function generateStaticParams() {
  const staticList = await fetch(
    "https://growwithsahil.com/blog/wp-json/wp/v2/resource-api/?_fields=acf,content,slug&acf_format=standard"
  ).then((res) => res.json());

  return staticList.map((item) => ({
    growthResourcesId: item.slug,
  }));
}
