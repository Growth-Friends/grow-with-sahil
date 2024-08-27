"use client";
import React from "react";
import MainLayout from "../Layout/MainLayout";
import {
  filePrefix,
  imageFilePrefix,
  svgFilePrefix,
} from "@/utils/functions/functions";
import { Inter } from "next/font/google";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], weight: ["500"] });

function ToolsRedirectComponent({ data }) {
  const ratingArray = new Array(5).fill(false).fill(true, 0, data.stars);

  return (
    <>
      <MainLayout
        innerClass={
          "xl:pt-12 lg:pt-10 md:pt-8 pt-3 xl:pb-10 lg:pb-5 md:pb-4 pb-2 "
        }
      >
        <div>
          <div
            style={{
              backgroundImage: `url(${imageFilePrefix("resourcesImage.png")})`,
            }}
            className="xl:max-w-[55rem] lg:max-w-[50rem] md:max-w-[35rem] max-w-[25rem] mx-auto mt-0 xl:h-[550px] lg:h-[500px] md:h-[350px] h-[250px] bg-center bg-no-repeat bg-cover shadow-lg "
          />
          <div className="flex items-center justify-between xl:pt-8 lg:pt-6 pt-4 ">
            <div className="inline-flex flex-col xl:gap-y-7 lg:gap-y-6 md:gap-y-5 gap-y-3">
              <div className="flex">
                {ratingArray.map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={svgFilePrefix(
                        `${item ? "/blackStar.svg" : "/emptyStar.svg"}`
                      )}
                      alt="review start"
                      className="aspect-auto xl:w-6 lg:w-5 w-4"
                    />
                  );
                })}
              </div>
              <div className="flex lg:gap-x-2 gap-x-1">
                <img
                  loading="lazy"
                  src={svgFilePrefix("/download.svg")}
                  alt="download illustration"
                  className="aspect-auto w-4"
                />
                <span
                  className={
                    inter.className +
                    " font-medium xl:text-xl lg:text-lg md:text-base text-sm "
                  }
                >
                  +{data.Downloads} Downloads
                </span>
              </div>
            </div>
            <Link
              href={data.cta_url}
              prefetch={false}
              className="bg-primaryColor px-3 py-2 rounded-md font-medium xl:text-lg lg:text-base md:text-sm text-xs flex items-center lg:gap-x-2 gap-x-1 hover:gap-x-3 transition-all duration-300 ease-in-out "
            >
              {data.cta_text}
              <ArrowForwardIcon className="lg:text-lg text-base" />
            </Link>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default ToolsRedirectComponent;
