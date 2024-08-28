"use client"; // Indicates that this component uses client-side code

import React, { useEffect, useState } from "react"; // Import React hooks
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import IndividualMarketingToolsPage from "../IndividualMarketingToolsPage/IndividualMarketingToolsPage";

function MarketingToolPageContainer({ params }) {
  const [data, setData] = useState(null); // State to hold fetched data
  const router = useRouter(); // Get the router object to handle navigation

  useEffect(() => {
    // Fetching data when the component mounts
    async function fetchToolData() {
      try {
        const res = await fetch(
          `https://growwithsahil.com/blog/wp-json/wp/v2/tools-api/?slug=${params.marketingToolsId}&_fields=acf,content,slug&acf_format=standard`,
          { cache: "no-store" } // Disable caching for fresh data
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await res.json();
        const toolData = result.length ? result[0] : null; // Assuming result is an array

        setData(toolData); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
        router.push("/404"); // Redirect to 404 page if data fetching fails
      }
    }

    fetchToolData();
  }, [params.marketingToolsId]); // Dependency array to refetch when `marketingToolsId` changes

  // Render the child component and pass fetched data as props
  return <IndividualMarketingToolsPage data={data} />;
}

export default MarketingToolPageContainer;
