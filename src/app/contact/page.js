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
