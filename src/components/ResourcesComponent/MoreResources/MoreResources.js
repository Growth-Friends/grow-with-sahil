"use client";
import MainLayout from "@/components/Layout/MainLayout";
import {
  filePrefix,
  getComponentText,
  svgFilePrefix,
} from "@/utils/functions/functions";
import Link from "next/link";
import React, { useRef } from "react";

export let moreResourcesRef;

function MoreResources({ moreResources, moreTools }) {
  const content = getComponentText(
    `util.${moreResources ? "moreResources" : moreTools && "moreTools"}`
  );
  moreResourcesRef = useRef();
  return (
    <MainLayout>
      <div className="xl:pt-16 lg:pt-14 md:pt-12 pt-10 overflow-hidden ">
        <div
          ref={moreResourcesRef}
          className="text-center bg-black text-white xl:py-8 py-6 px-3 rounded-t-2xl"
        >
          <h2 className="font-bold xl:text-4xl lg:text-3xl text-2xl uppercase ">
            {content.heading}
          </h2>
          <p className="text-paraSecondary xl:text-lg lg:text-base md:text-sm text-xs xl:w-[480px] lg:w-[420px] md:w-[380px] w-full mx-auto xl:mt-3 lg:mt-2 mt-1 tracking-wide leading-normal ">
            {content.subHeading.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {item.para ? (
                    <span>{item.para}</span>
                  ) : (
                    <a
                      href={item.href}
                      className="underline underline-offset-4"
                    >
                      {item.link}
                    </a>
                  )}
                </React.Fragment>
              );
            })}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:p-8 lg:p-6 p-4 xl:gap-8 lg:gap-6 gap-4 border-x-2 border-b-2 border-paraSecondary/40 rounded-b-2xl ">
          {content.resourcesList.map((item, index) => {
            return (
              <Link
                prefetch={false}
                key={index}
                // href={filePrefix(
                //   item.link,
                //   moreResources
                //     ? "/growth-resources"
                //     : moreTools && "/marketing-tools"
                // )}
                href={
                  moreResources
                    ? "/growth-resources"
                    : moreTools && "/marketing-tools"
                }
                className="bg-black text-white xl:p-3.5 p-3 flex items-center gap-x-5 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out "
              >
                <img
                  loading="lazy"
                  src={svgFilePrefix(item.imageUrl)}
                  alt={item.head}
                  className="aspect-auto md:w-12 w-10"
                />
                <p className="font-semibold xl:text-lg text-base ">
                  {item.head}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}

export default MoreResources;
