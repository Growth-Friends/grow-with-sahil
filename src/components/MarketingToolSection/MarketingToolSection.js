"use client";
import React, { useRef } from "react";
import MainLayout from "../Layout/MainLayout";
import { filePrefix, getComponentText } from "@/utils/functions/functions";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import staticRoutes from "@/utils/routes/staticRoutes";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export let marketingToolRef;

function MarketingToolSection() {
  const content = getComponentText("home.marketingToolSection");
  marketingToolRef = useRef();
  return (
    <MainLayout
      innerClass={
        "bg-black text-white rounded-3xl text-center xl:pt-10 lg:pt-9 md:pt-8 pt-7 xl:pb-9 lg:pb-8 md:pb-7 pb-6 "
      }
      ref={marketingToolRef}
    >
      <h2 className="font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl ">
        {content.heading}
      </h2>
      <p className="text-paraSecondary xl:text-xl lg:text-lg md:text-base text-sm xl:w-[580px] lg:w-[500px] md:w-[460px] w-full xl:mt-3 lg:mt-2 mt-1 tracking-wide leading-normal inline-block ">
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
      <div className="xl:pt-8 lg:pt-7 md:pt-6 pt-5 xl:pb-10 lg:pb-9 md:pb-8 pb-7 space-y-1 relative">
        <div className="absolute h-full xl:w-20 lg:w-16 md:w-14 w-12 top-0 left-0 bg-blackSideLeft z-10 " />
        <Marquee
          className="xl:py-6 lg:py-5 md:py-3.5 py-3 "
          direction="left"
          speed="35"
        >
          {content.marketingToolList.map((item, index) => {
            return (
              <Link
                prefetch={false}
                href={filePrefix(item.link, "/marketing-tools")}
                key={index}
                className="xl:px-4 lg:px-3 md:px-3 px-2.5 xl:py-4 lg:py-3 md:py-2 py-2 bg-black hover:bg-primaryColor hover:text-black transition-all duration-300 ease-in-out lg:border-[3px] border-[2px] border-primaryColor rounded-lg xl:text-lg md:text-base text-sm font-medium xl:mx-2.5 lg:mx-2 md:mx-1.5 mx-1 "
              >
                {item.name}
              </Link>
            );
          })}
        </Marquee>
        <Marquee
          className="xl:py-6 lg:py-5 md:py-3.5 py-3"
          direction="right"
          speed="35"
        >
          {content.marketingToolList.map((item, index) => {
            return (
              <Link
                prefetch={false}
                href={filePrefix(item.link, "/marketing-tools")}
                key={index}
                className="xl:px-4 lg:px-3 md:px-3 px-2.5 xl:py-4 lg:py-3 md:py-2 py-2 bg-black hover:bg-primaryColor hover:text-black transition-all duration-300 ease-in-out border-[3px] border-primaryColor rounded-lg xl:text-lg md:text-base text-sm font-medium xl:mx-2.5 lg:mx-2 md:mx-1.5 mx-1 "
              >
                {item.name}
              </Link>
            );
          })}
        </Marquee>
        <div className="absolute h-full xl:w-20 lg:w-16 md:w-14 w-12 top-0 right-0 bg-blackSideRight z-10 " />
      </div>
      <Link
        prefetch={false}
        href={staticRoutes[`${content.link}`]}
        className="bg-primaryColor text-black lg:px-4 px-3 xl:py-3 lg:py-2.5 py-2 rounded-md font-semibold inline-flex items-center xl:text-lg md:text-base text-sm xl:gap-x-2 lg:gap-x-1.5 md:gap-x-1 gap-x-0.5 hover:gap-x-4 transition-all duration-300 ease-in-out "
      >
        <span>{content.button}</span>

        <ArrowForwardIcon className="lg:text-xl text-lg" />
      </Link>
    </MainLayout>
  );
}

export default MarketingToolSection;
