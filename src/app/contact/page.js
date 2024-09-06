import ContactMeForm from "@/components/ContactMeForm/ContactMeForm";
import SubHeroSection from "@/components/SubHeroSection/SubHeroSection";
import { getComponentText } from "@/utils/functions/functions";
import React from "react";

function ContactUsPage() {
  const content = getComponentText("contact");
  return (
    <>
      <SubHeroSection content={content} />
      <ContactMeForm />
    </>
  );
}

export default ContactUsPage;

export async function generateMetadata() {
  const response = await fetch(
    "https://growwithsahil.com/blog/wp-json/wp/v2/seo-api/?_fields=acf&acf_format=standard"
  ).then((res) => res.json());
  const seoDetail = response.filter(
    (item) => item.acf["page_slug"] === "/contact"
  )[0]?.acf;
  return {
    title: seoDetail?.title,
    description: seoDetail?.description,
  };
}
