import React from "react";
import MainLayout from "../Layout/MainLayout";
import {
  filePrefix,
  getComponentText,
  imageFilePrefix,
  svgFilePrefix,
} from "@/utils/functions/functions";
import { Inter } from "next/font/google";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const inter = Inter({ subsets: ["latin"], weight: ["500"] });

function ResourcesComponent() {
  const content = getComponentText("util.growthResources");
  return (
    <MainLayout>
      <div className="md:py-8 py-6 flex items-center flex-wrap justify-start xl:gap-y-14 md:gap-y-12 gap-y-8 ">
        {content.resourceList.map((item, index) => {
          const ratingArray = new Array(5)
            .fill(false)
            .fill(true, 0, item.rating);
          return (
            <Link
              prefetch={false}
              href={filePrefix(item.link, "/growth-resources")}
              key={index}
              className="lg:w-[calc(100%/3)] md:w-[calc(100%/2)] w-full flex-shrink-0 xl:px-5 px-4 lg:max-w-none max-w-[300px] mx-auto "
            >
              <div className="bg-black text-white xl:py-6 lg:py-4 py-3 px-3 rounded-t-lg text-center">
                <p className="font-bold xl:text-[26px] lg:text-[22px] text-[20px] ">
                  {item.head}
                </p>
                <p className="text-paraSecondary xl:text-[15px] lg:text-[14px] text-[13px] mt-1 tracking-wide leading-normal inline-block ">
                  {item.subHeading.map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        {item.para ? (
                          <span>{item.para}</span>
                        ) : (
                          <span className="underline underline-offset-4">
                            {item.link}
                          </span>
                        )}
                      </React.Fragment>
                    );
                  })}
                </p>
              </div>
              <div className="xl:px-6 lg:px-4 px-3 xl:py-6 lg:py-4 py-3 rounded-b-lg border-b-2 border-x-2 border-borderColor ">
                <img
                  loading="lazy"
                  src={imageFilePrefix(item.imageUrl)}
                  alt={item.head}
                  className="aspect-auto w-full"
                />
                <div className="flex items-center justify-between xl:mt-7 lg:mt-5 mt-4 ">
                  <div>
                    <div className="flex">
                      {ratingArray.map((item, index) => {
                        return (
                          <img
                            key={index}
                            src={svgFilePrefix(
                              `${item ? "/blackStar.svg" : "/emptyStar.svg"}`
                            )}
                            alt="review start"
                            className="aspect-auto xl:w-5 lg:w-4 w-3 "
                          />
                        );
                      })}
                    </div>
                    <div className="flex xl:gap-x-2 gap-x-1.5 lg:mt-3 mt-2 ">
                      <img
                        loading="lazy"
                        src={svgFilePrefix("/download.svg")}
                        alt="download illustration"
                        className="aspect-auto xl:w-4 lg:w-3 w-2.5 "
                      />
                      <span
                        className={
                          inter.className +
                          " font-medium xl:text-base lg:text-sm text-xs "
                        }
                      >
                        {item.downloadCount} Downloads
                      </span>
                    </div>
                  </div>
                  <button className="bg-primaryColor text-black xl:px-3 px-2 xl:py-2 py-1.5 xl:text-base text-sm rounded-md font-medium flex items-center gap-x-1 hover:gap-x-2 transition-all duration-300 ease-in-out ">
                    {item.button}
                    <ArrowForwardIcon className="lg:text-base text-sm " />
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </MainLayout>
  );
}

export default ResourcesComponent;
