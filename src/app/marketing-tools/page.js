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

export async function generateMetadata() {
  const response = await fetch(
    "https://growwithsahil.com/blog/wp-json/wp/v2/seo-api/?_fields=acf&acf_format=standard"
  ).then((res) => res.json());
  const seoDetail = response.filter(
    (item) => item.acf["page_slug"] === "/marketing-tools"
  )[0]?.acf;
  return {
    title: seoDetail?.title,
    description: seoDetail?.description,
  };
}
