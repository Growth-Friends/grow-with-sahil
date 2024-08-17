"use client";
import React, { useRef } from "react";
import MainLayout from "../Layout/MainLayout";
import BreadCrumbAndShare from "../UtilComponents/BreadCrumbAndShare/BreadCrumbAndShare";
import { getComponentText } from "@/utils/functions/functions";
import { usePathname } from "next/navigation";

export let subHeroSectionRef;

function SubHeroSection() {
  subHeroSectionRef = useRef();
  const pathArray = usePathname().split("/");
  const currentPathName = pathArray[pathArray.length - 1].replaceAll("-", " ");
  const content = getComponentText("util.subHeroSection");
  return (
    <MainLayout
      ref={subHeroSectionRef}
      outerClass={"bg-black text-white"}
      innerClass={
        "xl:pt-36 lg:pt-32 md:pt-28 pt-24 xl:pb-28 lg:pb-24 md:pb-20 pb-16 "
      }
    >
      <BreadCrumbAndShare />
      <div className="text-center xl:mt-20 lg:mt-16 md:mt-14 mt-12 ">
        <h1 className="uppercase font-bold xl:text-7xl lg:text-6xl md:text-5xl text-3xl  ">
          {currentPathName}
        </h1>
        <p className="text-paraSecondary xl:text-2xl lg:text-xl md:text-lg text-sm xl:w-[630px] lg:w-[580px] md:w-[500px] w-full mx-auto xl:mt-8 lg:mt-6 md:mt-4 mt-3 tracking-wide leading-normal ">
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
