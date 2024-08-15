import {
  filePrefix,
  getComponentText,
  svgFilePrefix,
} from "@/utils/functions/functions";
import React, { forwardRef } from "react";
import MainLayout from "../Layout/MainLayout";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
        <div className="py-10 overflow-hidden ">
          <div
            ref={ref}
            className="text-center bg-black text-white py-10 px-3 rounded-t-2xl"
          >
            <h2 className="font-bold text-5xl uppercase ">{content.heading}</h2>
            <p className="text-paraSecondary text-xl w-[580px] mx-auto mt-3 tracking-wide leading-normal ">
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
          <div className="grid grid-cols-3 p-10 gap-10 border-x-2 border-b-2 border-paraSecondary/40 rounded-b-2xl ">
            {content.toolsList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-black text-white p-8 gap-x-5 rounded-xl "
                >
                  <div className="flex items-center gap-x-6">
                    <img
                      loading="lazy"
                      src={svgFilePrefix(item.imageUrl)}
                      alt={item.head}
                      className="aspect-auto w-16"
                    />
                    <p className="font-semibold text-2xl">{item.head}</p>
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <p className="font-light">
                      {item.hostedInHouse ? "In-House" : "Re-directed"}
                    </p>
                    <div className="flex items-center gap-x-1">
                      <img
                        loading="lazy"
                        alt="like symbol"
                        src={svgFilePrefix("/likeSymbol.svg")}
                        className="aspect-auto w-4"
                      />
                      <span>{item.likes}</span>
                    </div>
                  </div>
                  <p className="text-lg mt-4">{item.aboutTool}</p>
                  <div className="flex justify-center mt-10">
                    <Link
                      prefetch={false}
                      href={filePrefix(item.link, "/marketing-tools")}
                      className="bg-primaryColor text-black px-3 py-2 rounded-md font-medium flex items-center gap-x-1 hover:gap-x-2 transition-all duration-300 ease-in-out "
                    >
                      {item.button}
                      <ArrowForwardIcon className="text-base" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MainLayout>
    );
  }
);

export default ToolsComponent;
