import AboutMeSection from "@/components/AboutMeSection/AboutMeSection";
import MarketingToolPageContainer from "@/components/MarketingToolPageContainer/MarketingToolPageContainer";
import MoreResources from "@/components/ResourcesComponent/MoreResources/MoreResources";
import React from "react";
// Import the notFound function from next/navigation

// async function fetchToolData(slug) {
//   const res = await fetch(
//     `https://growwithsahil.com/blog/wp-json/wp/v2/tools-api/?slug=${slug}&_fields=acf,content,slug&acf_format=standard`,
//     { cache: "no-store" } // This option disables caching to get fresh data
//   );
//   if (!res.ok) {
//     // Handle error
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

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
