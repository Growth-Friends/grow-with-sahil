import AboutMeSection from "@/components/AboutMeSection/AboutMeSection";
import DetailSection from "@/components/DetailSection/DetailSection";
import GrowthResourceDownload from "@/components/GrowthResourceDownload/GrowthResourceDownload";
import MoreResources from "@/components/ResourcesComponent/MoreResources/MoreResources";
import SubHeroSection from "@/components/SubHeroSection/SubHeroSection";
import React from "react";

function IndividualGrowthResourcesPage() {
  return (
    <>
      {/* <SubHeroSection /> */}
      <GrowthResourceDownload />
      {/* <DetailSection /> */}
      <MoreResources moreResources={true} />
      <AboutMeSection />
    </>
  );
}

export default IndividualGrowthResourcesPage;

export const dynamicParams = false;

export async function generateStaticParams() {
  const staticList = await fetch(
    "https://growwithsahil.com/blog/wp-json/wp/v2/resource-api/?_fields=acf,content,slug&acf_format=standard "
  ).then((res) => res.json());

  return staticList.map((item) => ({
    growthResourcesId: item.slug,
  }));
}
