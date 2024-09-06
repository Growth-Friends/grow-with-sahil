import AboutMeSection from "@/components/AboutMeSection/AboutMeSection";
import MarketingToolPageContainer from "@/components/MarketingToolPageContainer/MarketingToolPageContainer";
import MoreResources from "@/components/ResourcesComponent/MoreResources/MoreResources";
import React from "react";

async function IndividualMarketingToolsPage({ params }) {
  const response = await fetch(
    "https://growwithsahil.com/blog/wp-json/wp/v2/tools-api/?_fields=acf,content,slug,yoast_head_json&acf_format=standard",
    { method: "GET" }
  ).then((res) => res.json());
  const seoDetail = response.filter(
    (item) => item.slug === params.marketingToolsId
  )[0]["yoast_head_json"];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoDetail.schema) }}
      />
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
    "https://growwithsahil.com/blog/wp-json/wp/v2/tools-api/?_fields=acf,content,slug&acf_format=standard",
    { method: "GET" }
  ).then((res) => res.json());

  return staticList.map((item) => ({
    marketingToolsId: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const response = await fetch(
    "https://growwithsahil.com/blog/wp-json/wp/v2/tools-api/?_fields=acf,content,slug,yoast_head_json&acf_format=standard",
    { method: "GET" }
  ).then((res) => res.json());
  const seoDetail = response.filter(
    (item) => item.slug === params.marketingToolsId
  )[0]["yoast_head_json"];
  return {
    title: seoDetail.title,
    description:
      seoDetail.description ??
      "Explore powerful marketing tools designed to boost your digital strategy. From influencer finders to project management, get the edge with Grow With Sahil.",
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
