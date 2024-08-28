import AboutMeSection from "@/components/AboutMeSection/AboutMeSection";
import MarketingToolPageContainer from "@/components/MarketingToolPageContainer/MarketingToolPageContainer";
import MoreResources from "@/components/ResourcesComponent/MoreResources/MoreResources";
import React from "react";

async function IndividualMarketingToolsPage({ params }) {
  return (
    <>
      <MarketingToolPageContainer params={params} />
      <MoreResources moreTools={true} />
      <AboutMeSection />
    </>
  );
}

export default IndividualMarketingToolsPage;

export const dynamicParams = false;
export const dynamic = "error";

export async function generateStaticParams() {
  const staticList = await fetch(
    "https://growwithsahil.com/blog/wp-json/wp/v2/tools-api/?_fields=acf,content,slug&acf_format=standard"
  ).then((res) => res.json());

  return staticList.map((item) => ({
    marketingToolsId: item.slug,
  }));
}
