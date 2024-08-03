"use client";
import React, { useRef } from "react";
import MainLayout from "../Layout/MainLayout";
import BreadCrumbAndShare from "../UtilComponents/BreadCrumbAndShare/BreadCrumbAndShare";

export let subHeroSectionRef;

function SubHeroSection() {
  subHeroSectionRef = useRef();
  return (
    <MainLayout
      ref={subHeroSectionRef}
      outerClass={"bg-black text-white"}
      innerClass={"py-28"}
    >
      <BreadCrumbAndShare />
    </MainLayout>
  );
}

export default SubHeroSection;
