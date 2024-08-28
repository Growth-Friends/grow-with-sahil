import React from "react";
import SubHeroSection from "../SubHeroSection/SubHeroSection";
import GrowthResourceDownload from "../GrowthResourceDownload/GrowthResourceDownload";
import HtmlContent from "../HtmlContent/HtmlContent";

function IndividualGrowthResourcesPage({ data }) {
  if (!data) {
    return null; // Return null if no data is available
  }
  return (
    <>
      <SubHeroSection subHeading={data.acf.out_description} />
      <GrowthResourceDownload data={data.acf} />
      <HtmlContent data={data} />
    </>
  );
}

export default IndividualGrowthResourcesPage;
