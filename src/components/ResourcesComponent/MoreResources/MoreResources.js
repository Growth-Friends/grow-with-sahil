"use client";
import MainLayout from "@/components/Layout/MainLayout";
import { getComponentText, svgFilePrefix } from "@/utils/functions/functions";
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
      <div className="pt-16 overflow-hidden ">
        <div
          ref={moreResourcesRef}
          className="text-center bg-black text-white py-8 px-3 rounded-t-2xl"
        >
          <h2 className="font-bold text-4xl uppercase ">{content.heading}</h2>
          <p className="text-paraSecondary text-lg w-[480px] mx-auto mt-3 tracking-wide leading-normal ">
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
        <div className="grid grid-cols-3 p-8 gap-8 border-x-2 border-b-2 border-paraSecondary/40 rounded-b-2xl ">
          {content.resourcesList.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                className="bg-black text-white p-3.5 flex items-center gap-x-5 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out "
              >
                <img
                  loading="lazy"
                  src={svgFilePrefix(item.imageUrl)}
                  alt={item.head}
                  className="aspect-auto w-12"
                />
                <p className="font-semibold text-lg">{item.head}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}

export default MoreResources;
