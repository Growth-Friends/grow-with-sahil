import { getComponentText, svgFilePrefix } from "@/utils/functions/functions";
import React, { forwardRef } from "react";
import MainLayout from "../Layout/MainLayout";
import Link from "next/link";

const ToolsComponent = forwardRef(
  ({ seoTools, socialTools, performanceTools }, ref) => {
    const content = getComponentText(
      `util.${
        seoTools
          ? "seoTools"
          : socialTools
          ? "socialTools"
          : performanceTools && "performanceTools"
      }`
    );
    return (
      <MainLayout>
        <div className="pt-8 pb-8 overflow-hidden ">
          <div
            ref={ref}
            className="text-center bg-black text-white py-10 px-3 rounded-t-2xl"
          >
            <h2 className="font-bold text-5xl ">{content.heading}</h2>
            <p className="text-bgBlackPara text-xl w-[580px] mx-auto mt-3 tracking-wide leading-normal ">
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
          <div className="grid grid-cols-3 p-10 gap-10 border-x-2 border-b-2 border-bgBlackPara/40 rounded-b-2xl ">
            {content.toolsList.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.link}
                  className="bg-black text-white p-5 flex items-center gap-x-5 rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out "
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
);

export default ToolsComponent;
