"use client";
import React, { useRef } from "react";
import ToolsComponent from "../ToolsComponent";

export let seoToolsRef, socialToolsRef, performanceToolsRef;

function ToolsWrapper() {
  seoToolsRef = useRef();
  socialToolsRef = useRef();
  performanceToolsRef = useRef();
  return (
    <>
      <ToolsComponent seoTools={true} ref={seoToolsRef} />
      <ToolsComponent socialTools={true} ref={socialToolsRef} />
      <ToolsComponent performanceTools={true} ref={performanceToolsRef} />
    </>
  );
}

export default ToolsWrapper;
