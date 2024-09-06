import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import ExpertSection from "@/components/ExpertSection/ExpertSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import React from "react";

function About() {
  return (
    <>
      <HeroSection about={true} />
      <ExperienceSection />
      <ExpertSection about={true} />
    </>
  );
}

export default About;

export async function generateMetadata() {
  const response = await fetch(
    "https://growwithsahil.com/blog/wp-json/wp/v2/seo-api/?_fields=acf&acf_format=standard"
  ).then((res) => res.json());
  const seoDetail = response.filter(
    (item) => item.acf["page_slug"] === "/about"
  )[0]?.acf;
  return {
    title: seoDetail?.title,
    description: seoDetail?.description,
  };
}
