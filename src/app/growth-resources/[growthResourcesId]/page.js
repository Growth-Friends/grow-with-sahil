import AboutMeSection from "@/components/AboutMeSection/AboutMeSection";
import HtmlContent from "@/components/HtmlContent/HtmlContent";
import GrowthResourceDownload from "@/components/GrowthResourceDownload/GrowthResourceDownload";
import MoreResources from "@/components/ResourcesComponent/MoreResources/MoreResources";
import SubHeroSection from "@/components/SubHeroSection/SubHeroSection";
import React from "react";

// Function to fetch data from the API
async function fetchResourceData(slug) {
  const res = await fetch(
    `https://growwithsahil.com/blog/wp-json/wp/v2/resource-api/?slug=${slug}&_fields=acf,content,slug&acf_format=standard`,
    { cache: "no-store" } // Disabling cache to ensure fresh data is fetched
  );
  if (!res.ok) {
    // Handle error if the fetch fails
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

// Main component to render the individual growth resources page
async function IndividualGrowthResourcesPage({ params }) {
  // Fetch the resource data using the slug from the params
  const resourceData = await fetchResourceData(params.growthResourcesId);

  // Assuming resourceData is an array and you need the first item
  const data = resourceData.length ? resourceData[0] : null;

  return (
    <>
      {/* Check if data is present before rendering SubHeroSection */}
      {data && <SubHeroSection subHeading={data.acf.out_description} />}
      <GrowthResourceDownload />
      {/* Use HtmlContent to render HTML content dynamically */}
      {data && <HtmlContent data={data} />}
      <MoreResources moreResources={true} />
      <AboutMeSection />
    </>
  );
}

export default IndividualGrowthResourcesPage;

export const dynamicParams = false;

// Function to generate static parameters for pre-rendering
export async function generateStaticParams() {
  const staticList = await fetch(
    "https://growwithsahil.com/blog/wp-json/wp/v2/resource-api/?_fields=acf,content,slug&acf_format=standard"
  ).then((res) => res.json());

  return staticList.map((item) => ({
    growthResourcesId: item.slug,
  }));
}
