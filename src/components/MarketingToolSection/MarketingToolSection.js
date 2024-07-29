"use client";
import React, { useRef } from "react";
import MainLayout from "../Layout/MainLayout";
import { getComponentText } from "@/utils/functions/functions";
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
      innerClass={"bg-black text-white rounded-3xl text-center pt-10 pb-9 "}
      ref={marketingToolRef}>
      <h2 className="font-bold text-5xl ">{content.heading}</h2>
      <p className="text-bgBlackPara text-xl w-[580px] mt-3 tracking-wide leading-normal inline-block ">
        {content.subHeading.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {item.para ? (
                <span>{item.para}</span>
              ) : (
                <a
                  href={item.href}
                  className="underline underline-offset-4">
                  {item.link}
                </a>
              )}
            </React.Fragment>
          );
        })}
      </p>
      <div className="pt-8 pb-10 space-y-1 relative">
        <div className="absolute h-full w-20 top-0 left-0 bg-blackSideLeft z-10 " />
        <Marquee
          className="py-6"
          direction="left"
          speed="35">
          {content.marketingToolList.map((item, index) => {
            return (
              <Link
                prefetch={false}
                href={item.link}
                key={index}
                className="px-4 py-4 bg-black hover:bg-primaryColor hover:text-black transition-all duration-300 ease-in-out border-[3px] border-primaryColor rounded-xl text-lg font-medium mx-2.5 ">
                {item.name}
              </Link>
            );
          })}
        </Marquee>
        <Marquee
          className="py-6"
          direction="right"
          speed="35">
          {content.marketingToolList.map((item, index) => {
            return (
              <Link
                prefetch={false}
                href={item.link}
                key={index}
                className="px-4 py-4 bg-black hover:bg-primaryColor hover:text-black transition-all duration-300 ease-in-out border-[3px] border-primaryColor rounded-xl text-lg font-medium mx-2.5 ">
                {item.name}
              </Link>
            );
          })}
        </Marquee>
        <div className="absolute h-full w-20 top-0 right-0 bg-blackSideRight z-10 " />
      </div>
      <Link
        prefetch={false}
        href={staticRoutes[`${content.link}`]}
        className="bg-primaryColor text-black px-4 py-3 rounded-lg font-semibold inline-flex items-center text-lg gap-x-2 hover:gap-x-4 transition-all duration-300 ease-in-out ">
        {content.button}
        <ArrowForwardIcon className="text-xl" />
      </Link>
    </MainLayout>
  );
}

export default MarketingToolSection;
