import React from "react";
import IndividualMarketingToolsPage from "../IndividualMarketingToolsPage/IndividualMarketingToolsPage";

async function MarketingToolPageContainer({ params }) {
  const data = await fetchToolData(params);
  return <IndividualMarketingToolsPage data={data} />;
}

export default MarketingToolPageContainer;

async function fetchToolData(params) {
  try {
    const res = await fetch(
      `https://growwithsahil.com/blog/wp-json/wp/v2/tools-api/?slug=${params.marketingToolsId}&_fields=acf,content,slug&acf_format=standard`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const result = await res.json();
    const toolData = result.length ? result[0] : null;
    return toolData;
  } catch (err) {
    console.error("Error fetching data", err);
  }
}
