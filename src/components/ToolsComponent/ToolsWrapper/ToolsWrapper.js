"use client";
import React, { use, useEffect, useRef, useState } from "react";
import ToolsComponent from "../ToolsComponent";
import getMethodCall from "@/utils/services/services";

export let seoToolsRef, socialToolsRef, performanceToolsRef;

function ToolsWrapper() {
  seoToolsRef = useRef();
  socialToolsRef = useRef();
  performanceToolsRef = useRef();
  const [seoToolsList, setSeoToolsList] = useState();
  const [performanceToolsList, setPerformanceToolsList] = useState();
  const [socialToolsList, setSocialToolsList] = useState();

  useEffect(() => {
    (async () => {
      const response = await getMethodCall(
        "https://growwithsahil.com/blog/wp-json/wp/v2/tools-api/?_fields=acf,content,slug&acf_format=standard"
      );
      const data = await response.json();
      setSeoToolsList(
        data.filter((item) => {
          return item.acf.tool_category === "Search Engine optimization";
        })
      );
    })();
  }, []);

  return (
    <>
      {seoToolsList && (
        <ToolsComponent
          seoTools={true}
          ref={seoToolsRef}
          toolsList={seoToolsList}
        />
      )}
      {socialToolsList && (
        <ToolsComponent
          socialTools={true}
          ref={socialToolsRef}
          toolsList={socialToolsList}
        />
      )}
      {performanceToolsList && (
        <ToolsComponent
          performanceTools={true}
          ref={performanceToolsRef}
          toolsList={performanceToolsList}
        />
      )}
    </>
  );
}

export default ToolsWrapper;
