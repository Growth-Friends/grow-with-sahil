"use client";
import React, { useRef } from "react";
import MainLayout from "../Layout/MainLayout";
import BreadCrumbAndShare from "../UtilComponents/BreadCrumbAndShare/BreadCrumbAndShare";
import { getComponentText } from "@/utils/functions/functions";
import { usePathname } from "next/navigation";

export let subHeroSectionRef;

function SubHeroSection({ marketingTools, growthResources }) {
  subHeroSectionRef = useRef();
  const pathArray = usePathname().split("/");
  const currentPathName = pathArray[pathArray.length - 1].replaceAll("-", " ");
  const content = getComponentText(
    `${
      marketingTools ? "marketingTools" : growthResources && "growthResources"
    }.subHeroSection`
  );
  return (
    <MainLayout
      ref={subHeroSectionRef}
      outerClass={"bg-black text-white"}
      innerClass={"pt-36 pb-28"}
    >
      <BreadCrumbAndShare />
      <div className="text-center mt-20">
        <h1 className="uppercase font-bold text-7xl">{currentPathName}</h1>
        <p className="text-paraSecondary text-2xl w-[630px] mx-auto mt-8 tracking-wide leading-normal ">
          {content.subHeading.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {item.para ? (
                  <span>{item.para}</span>
                ) : (
                  <a href={item.href} className="underline underline-offset-4">
                    {item.link}
                  </a>
                )}
              </React.Fragment>
            );
          })}
        </p>
      </div>
    </MainLayout>
  );
}

export default SubHeroSection;
