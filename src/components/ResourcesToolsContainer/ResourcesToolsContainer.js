import React from "react";
import IndividualGrowthResourcesPage from "../IndividualGrowthResourcesPage/IndividualGrowthResourcesPage";

async function ResourcesToolsContainer({ params }) {
  const data = await fetchToolData(params);
  return <IndividualGrowthResourcesPage data={data} />;
}

export default ResourcesToolsContainer;

async function fetchToolData(params) {
  try {
    const res = await fetch(
      `https://growwithsahil.com/blog/wp-json/wp/v2/resource-api/?slug=${params.growthResourcsId}&_fields=acf,content,slug&acf_format=standard`
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
