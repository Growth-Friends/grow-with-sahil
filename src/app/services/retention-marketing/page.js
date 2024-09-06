import DetailSection from "@/components/DetailSection/DetailSection";
import SubHeroSection from "@/components/SubHeroSection/SubHeroSection";
import { getComponentText } from "@/utils/functions/functions";
import React from "react";

function page() {
  const content = getComponentText(
    "services.individualServices.retention-marketing"
  );
  content;
  return (
    <>
      <SubHeroSection content={content} />
      <DetailSection content={content} />
    </>
  );
}

export default page;

export async function generateMetadata() {
  const response = await fetch(
    "https://growwithsahil.com/blog/wp-json/wp/v2/seo-api/?_fields=acf&acf_format=standard"
  ).then((res) => res.json());
  const seoDetail = response.filter(
    (item) => item.acf["page_slug"] === "/services/retention-marketing"
  )[0]?.acf;
  return {
    title: seoDetail?.title,
    description: seoDetail?.description,
  };
}
