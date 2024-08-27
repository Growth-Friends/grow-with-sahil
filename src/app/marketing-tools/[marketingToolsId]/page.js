import AboutMeSection from "@/components/AboutMeSection/AboutMeSection";
import DetailSection from "@/components/DetailSection/DetailSection";
import DummyToolsSection from "@/components/DummyToolsSection/DummyToolsSection";
import HtmlContent from "@/components/HtmlContent/HtmlContent";
import MoreResources from "@/components/ResourcesComponent/MoreResources/MoreResources";
import SubHeroSection from "@/components/SubHeroSection/SubHeroSection";
import ToolsRedirectComponent from "@/components/ToolsRedirectComponent/ToolsRedirectComponent";
import React from "react";

async function fetchToolData(slug) {
  const res = await fetch(
    `https://growwithsahil.com/blog/wp-json/wp/v2/tools-api/?slug=${slug}&_fields=acf,content,slug&acf_format=standard`,
    { cache: "no-store" } // This option disables caching to get fresh data
  );
  if (!res.ok) {
    // Handle error
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function IndividualMarketingToolsPage({ params }) {
  // Fetch data using the slug from params
  const toolData = await fetchToolData(params.marketingToolsId);

  // Assuming toolData is an array and you need the first item
  const data = toolData.length ? toolData[0] : null;

  return (
    <>
      <SubHeroSection subHeading={data.acf.out_description} />
      <ToolsRedirectComponent data={data.acf} />
      <HtmlContent data={data} />
      <MoreResources moreTools={true} />
      <AboutMeSection />
    </>
  );
}

export default IndividualMarketingToolsPage;

export const dynamicParams = false;

export async function generateStaticParams() {
  const staticList = await fetch(
    "https://growwithsahil.com/blog/wp-json/wp/v2/tools-api/?_fields=acf,content,slug&acf_format=standard"
  ).then((res) => res.json());

  return staticList.map((item) => ({
    marketingToolsId: item.slug,
  }));
}
