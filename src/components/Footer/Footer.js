"use client";
import { getComponentText, svgFilePrefix } from "@/utils/functions/functions";
import staticRoutes from "@/utils/routes/staticRoutes";
import Link from "next/link";
import React, { useRef } from "react";
import MainLayout from "../Layout/MainLayout";

export let footerRef;

function Footer() {
  const content = getComponentText("util.footer");
  footerRef = useRef();
  return (
    <MainLayout
      outerClass={"bg-black text-white"}
      innerClass={"py-12"}
      ref={footerRef}
    >
      <div className="">
        <h2 className="font-bold text-[32px]">{content.brandName}</h2>
        <p className="font-medium text-[17px] leading-relaxed text-paraSecondary mt-[8px]">
          {content.para}
        </p>
        <div className="grid grid-flow-col grid-cols-4 mt-[45px] ">
          {content.footerList.map((item, index) => {
            return (
              <div className="flex flex-col">
                <p className="font-bold text-[28px]">{item.head}</p>
                <ul key={index} className="flex flex-col mt-[12px] gap-y-2">
                  {item.linkList.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link
                          prefetch={false}
                          href={staticRoutes[`${item.link}`]}
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
        <div className="flex items-center justify-center gap-x-8 mt-[70px]">
          {content.socialShareList.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                prefetch={true}
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
