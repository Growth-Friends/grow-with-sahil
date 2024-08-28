"use client";
import React, { use, useEffect, useRef, useState } from "react";
import ToolsComponent from "../ToolsComponent";
import getMethodCall from "@/utils/services/services";

export let seoToolsRef, socialToolsRef, performanceToolsRef, retentionToolsRef;

function ToolsWrapper() {
  seoToolsRef = useRef();
  socialToolsRef = useRef();
  performanceToolsRef = useRef();
  retentionToolsRef = useRef();
  const [seoToolsList, setSeoToolsList] = useState([]);
  const [performanceToolsList, setPerformanceToolsList] = useState([]);
  const [socialToolsList, setSocialToolsList] = useState([]);
  const [retentionToolsList, setRetentionToolsList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getMethodCall(
        "https://growwithsahil.com/blog/wp-json/wp/v2/tools-api/?_fields=acf,content,slug&acf_format=standard"
      );
      const data = await response.json();
      setPerformanceToolsList(
        data.filter((item) => {
          return item.acf.tool_category === "Performance Marketing";
        })
      );
      setSeoToolsList(
        data.filter((item) => {
          return item.acf.tool_category === "Search Engine optimization";
        })
      );
      setSocialToolsList(
        data.filter((item) => {
          return item.acf.tool_category === "Social Media";
        })
      );
      setRetentionToolsList(
        data.filter((item) => {
          return item.acf.tool_category === "Retention Marketing";
        })
      );
    })();
  }, []);

  return (
    <>
      {seoToolsList.length !== 0 && (
        <ToolsComponent
          seoTools={true}
          ref={seoToolsRef}
          toolsList={seoToolsList}
        />
      )}
      {socialToolsList.length !== 0 && (
        <ToolsComponent
          socialTools={true}
          ref={socialToolsRef}
          toolsList={socialToolsList}
        />
      )}
      {performanceToolsList.length !== 0 && (
        <ToolsComponent
          performanceTools={true}
          ref={performanceToolsRef}
          toolsList={performanceToolsList}
        />
      )}
      {retentionToolsList.length !== 0 && (
        <ToolsComponent
          retentionTools={true}
          ref={retentionToolsRef}
          toolsList={retentionToolsList}
        />
      )}
    </>
  );
}

export default ToolsWrapper;
