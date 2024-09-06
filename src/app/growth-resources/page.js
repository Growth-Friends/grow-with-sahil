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

export async function generateMetadata() {
  const response = await fetch(
    "https://growwithsahil.com/blog/wp-json/wp/v2/seo-api/?_fields=acf&acf_format=standard"
  ).then((res) => res.json());
  const seoDetail = response.filter(
    (item) => item.acf["page_slug"] === "/growth-resources"
  )[0]?.acf;
  return {
    title: seoDetail?.title,
    description: seoDetail?.description,
  };
}
