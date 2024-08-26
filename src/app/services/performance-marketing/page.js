import DetailSection from "@/components/DetailSection/DetailSection";
import SubHeroSection from "@/components/SubHeroSection/SubHeroSection";
import { getComponentText } from "@/utils/functions/functions";
import React from "react";

function page() {
  const content = getComponentText(
    "services.individualServices.performance-marketing"
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
