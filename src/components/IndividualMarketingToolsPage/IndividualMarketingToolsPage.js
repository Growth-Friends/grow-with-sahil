// /components/IndividualMarketingToolsPage.js

import React from "react";
import SubHeroSection from "../SubHeroSection/SubHeroSection";
import ToolsRedirectComponent from "../ToolsRedirectComponent/ToolsRedirectComponent";
import HtmlContent from "../HtmlContent/HtmlContent";
import MoreResources from "../ResourcesComponent/MoreResources/MoreResources";
import AboutMeSection from "../AboutMeSection/AboutMeSection";

function IndividualMarketingToolsPage({ data }) {
  if (!data) {
    return null; // Return null if no data is available
  }

  return (
    <>
      <SubHeroSection subHeading={data.acf?.out_description} />
      <ToolsRedirectComponent data={data.acf} />
      <HtmlContent data={data} />
      <MoreResources moreTools={true} />
      <AboutMeSection />
    </>
  );
}

export default IndividualMarketingToolsPage;
