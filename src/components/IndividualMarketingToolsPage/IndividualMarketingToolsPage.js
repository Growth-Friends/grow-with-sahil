// /components/IndividualMarketingToolsPage.js

import React from "react";
import SubHeroSection from "../SubHeroSection/SubHeroSection";
import ToolsRedirectComponent from "../ToolsRedirectComponent/ToolsRedirectComponent";
import HtmlContent from "../HtmlContent/HtmlContent";

function IndividualMarketingToolsPage({ data }) {
  if (!data) {
    return null; // Return null if no data is available
  }

  return (
    <>
      <SubHeroSection subHeading={data.acf?.out_description} />
      <ToolsRedirectComponent data={data.acf} />
      <HtmlContent data={data} />
    </>
  );
}

export default IndividualMarketingToolsPage;
