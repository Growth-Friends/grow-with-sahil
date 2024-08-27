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
  ({ seoTools, socialTools, performanceTools, toolsList }, ref) => {
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
        <div className="xl:py-10 py-7 overflow-hidden ">
          <div
            ref={ref}
            className="text-center bg-black text-white lg:py-10 md:py-8 py-7 px-3 rounded-t-2xl"
          >
            <h2 className="font-bold xl:text-5xl lg:text-4xl md:text-3xl text-xl uppercase ">
              {content.heading}
            </h2>
            <p className="text-paraSecondary xl:text-xl lg:text-lg md:text-base text-sm xl:w-[580px] lg:w-[500px] md:w-[460px] w-full xl:mt-3 lg:mt-2 mt-1 mx-auto tracking-wide leading-normal ">
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
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:p-10 lg:p-8 md:p-6 p-6 xl:gap-10 lg:gap-8 md:gap-6 gap-6 border-x-2 border-b-2 border-paraSecondary/40 rounded-b-2xl ">
            {toolsList.map((item, index) => {
              return (
                <Link
                  prefetch={false}
                  href={filePrefix(`/${item.slug}`, "/marketing-tools")}
                  key={index}
                  className="bg-black text-white xl:p-8 p-4 gap-x-5 rounded-xl flex flex-col xl:max-w-[320px] lg:max-w-[280px] md:max-w-[260px] max-w-[250px] mx-auto "
                >
                  <div className="flex items-center lg:gap-x-6 gap-x-5">
                    <img
                      loading="lazy"
                      // src={svgFilePrefix(item.imageUrl)}
                      src={item.acf.tools_icon}
                      alt={item.acf.tools_name}
                      className="aspect-auto xl:w-16 lg:w-14 w-12 "
                    />
                    <p className="font-semibold xl:text-2xl md:text-xl text-lg ">
                      {item.acf.tools_name}
                    </p>
                  </div>
                  <div className="flex items-center justify-between xl:text-base text-sm mt-5">
                    <p className="font-light">{item.acf.tools_type}</p>
                    <div className="flex items-center gap-x-1">
                      <img
                        loading="lazy"
                        alt="like symbol"
                        src={svgFilePrefix("/likeSymbol.svg")}
                        className="aspect-auto w-4"
                      />
                      <span>{item.acf.downloads}</span>
                    </div>
                  </div>
                  <p className="xl:text-lg md:text-base text-sm mt-5 mb-10 line-clamp-3 ">
                    {item.acf.out_description}
                  </p>
                  <div className="flex justify-center mt-auto  ">
                    <button className="bg-primaryColor text-black px-3 py-2 rounded-md font-medium flex xl:text-base md:text-sm text-xs items-center gap-x-1 hover:gap-x-2 transition-all duration-300 ease-in-out ">
                      {item.acf.cta_text}
                      <ArrowForwardIcon className="text-base" />
                    </button>
                  </div>
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
