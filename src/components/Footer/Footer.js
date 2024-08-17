"use client";
import {
  filePrefix,
  getComponentText,
  svgFilePrefix,
} from "@/utils/functions/functions";
import staticRoutes from "@/utils/routes/staticRoutes";
import Link from "next/link";
import React, { useRef } from "react";
import MainLayout from "../Layout/MainLayout";

export let footerRef;

function Footer() {
  const content = getComponentText("util.footer");
  const socialShareList = getComponentText("util.socialShareList");
  footerRef = useRef();
  return (
    <MainLayout
      outerClass={"bg-black text-white"}
      innerClass={"py-12"}
      ref={footerRef}
    >
      <div className="">
        <h2 className="font-bold xl:text-3xl lg:text-2xl md:text-xl text-2xl ">
          {content.brandName}
        </h2>
        <p className="font-medium xl:text-[17px] lg:text-[16px] md:text-[15px] text-[14px] leading-relaxed text-paraSecondary mt-[8px]">
          {content.para}
        </p>
        <div className="grid grid-flow-col md:grid-cols-4 grid-cols-2 md:grid-rows-1 grid-rows-2 gap-x-3 gap-y-4 lg:mt-[45px] mt-[40px] ">
          {content.footerList.map((item, index) => {
            const staticRoutesActive = item.staticRoutes;
            return (
              <div key={index} className="flex flex-col">
                <p className="font-bold xl:text-[23px] lg:text-[20px] md:text-[18px] text-[17px] ">
                  {item.head}
                </p>
                <ul className="flex flex-col mt-[12px] lg:gap-y-2 md:gap-y-3 gap-y-2 xl:text-base lg:text-sm text-xs ">
                  {item.linkList.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link
                          prefetch={false}
                          href={
                            staticRoutesActive
                              ? staticRoutes[`${item.link}`]
                              : filePrefix(item.link, item.prefix)
                          }
                          className={`${
                            item.disabled && "pointer-events-none"
                          } text-footerPara `}
                        >
                          {item.para}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-x-8 lg:mt-[70px] mt-[60px] ">
          {socialShareList.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                prefetch={false}
              >
                <img
                  loading="lazy"
                  src={svgFilePrefix(item.imageUrl)}
                  alt="linkedin icon"
                  className="aspect-auto w-5"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}

export default Footer;
