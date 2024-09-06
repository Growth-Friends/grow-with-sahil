import AboutMeSection from "@/components/AboutMeSection/AboutMeSection";
import MoreResources from "@/components/ResourcesComponent/MoreResources/MoreResources";
import React from "react";
import ResourcesToolsContainer from "@/components/ResourcesToolsContainer/ResourcesToolsContainer";

async function IndividualGrowthResourcesPage({ params }) {
  const response = await fetch(
    "https://growwithsahil.com/blog/wp-json/wp/v2/resource-api/?_fields=acf,content,slug,yoast_head_json&acf_format=standard",
    { method: "GET" }
  ).then((res) => res.json());
  const seoDetail = response.filter(
    (item) => item.slug === params.growthResourcesId
  )[0]["yoast_head_json"];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoDetail.schema) }}
      />
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
    "https://growwithsahil.com/blog/wp-json/wp/v2/resource-api/?_fields=acf,content,slug&acf_format=standard",
    { method: "GET" }
  ).then((res) => res.json());

  return staticList.map((item) => ({
    growthResourcesId: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const response = await fetch(
    "https://growwithsahil.com/blog/wp-json/wp/v2/resource-api/?_fields=acf,content,slug,yoast_head_json&acf_format=standard",
    { method: "GET" }
  ).then((res) => res.json());
  const seoDetail = response.filter(
    (item) => item.slug === params.growthResourcesId
  )[0]["yoast_head_json"];
  return {
    title: seoDetail.title,
    description:
      seoDetail.description ??
      "Access essential growth resources to accelerate your business. Learn strategies, tips, and tools to drive sustainable growth with Grow With Sahil.",
    robots: seoDetail.robots,
    keywords: seoDetail.keywords,
    languages: { "en-US": "/en-US" },
    alternates: {
      canonical: seoDetail["og_url"],
    },
    openGraph: {
      title: seoDetail["og_title"],
      siteName: seoDetail["og_site_name"],
      url: seoDetail["og_url"],
      description: seoDetail["og_description"],
      type: seoDetail["og_type"],
      images: seoDetail["og_image"],
      publishedTime: seoDetail["article_modified_time"],
    },
    twitter: {
      card: seoDetail["twitter_card"],
      title: seoDetail["og_title"],
    },
  };
}
