import ExpertSection from "@/components/ExpertSection/ExpertSection";
import SubHeroSection from "@/components/SubHeroSection/SubHeroSection";
import { getComponentText } from "@/utils/functions/functions";
import React from "react";

function ServicesPage() {
  const content = getComponentText("services");
  return (
    <>
      <SubHeroSection content={content} />
      <ExpertSection />
    </>
  );
}

export default ServicesPage;

export async function generateMetadata() {
  const response = await fetch(
    "https://growwithsahil.com/blog/wp-json/wp/v2/seo-api/?_fields=acf&acf_format=standard",
    { method: "GET" }
  ).then((res) => res.json());
  const seoDetail = response.filter(
    (item) => item.acf["page_slug"] === "/services"
  )[0]?.acf;
  return {
    title: seoDetail?.title,
    description: seoDetail?.description,
  };
}
