import React from "react";
import MainLayout from "../Layout/MainLayout";
import {
  getComponentText,
  imageFilePrefix,
  svgFilePrefix,
} from "@/utils/functions/functions";
import { Inter } from "next/font/google";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const inter = Inter({ subsets: ["latin"], weight: ["500"] });

function ResourcesComponent() {
  const content = getComponentText("util.resources");
  return (
    <MainLayout>
      <div className="py-8 flex items-center flex-wrap justify-start gap-y-14 ">
        {content.resourceList.map((item, index) => {
          const ratingArray = new Array(5)
            .fill(false)
            .fill(true, 0, item.rating);
          return (
            <div key={index} className="w-[calc(100%/3)] flex-shrink-0 px-5 ">
              <div className="bg-black text-white py-6 px-3 rounded-t-lg text-center">
                <p className="font-bold text-[26px] ">{item.head}</p>
                <p className="text-bgBlackPara text-[15px] mt-1 tracking-wide leading-normal inline-block ">
                  {item.subHeading.map((item, index) => {
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
              <div className="px-6 pt-6 pb-6 rounded-b-lg border-b-2 border-x-2 border-borderColor ">
                <img
                  loading="lazy"
                  src={imageFilePrefix(item.imageUrl)}
                  alt={item.head}
                  className="aspect-auto w-full"
                />
                <div className="flex items-center justify-between mt-7">
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
                            className="aspect-auto w-5"
                          />
                        );
                      })}
                    </div>
                    <div className="flex gap-x-2 mt-3 ">
                      <img
                        loading="lazy"
                        src={svgFilePrefix("/download.svg")}
                        alt="download illustration"
                        className="aspect-auto w-4"
                      />
                      <span
                        className={inter.className + " font-medium text-base "}
                      >
                        {item.downloadCount} Downloads
                      </span>
                    </div>
                  </div>
                  <Link
                    prefetch={false}
                    href={item.link}
                    className="bg-primaryColor px-3 py-2 rounded-md font-medium flex items-center gap-x-1 hover:gap-x-2 transition-all duration-300 ease-in-out "
                  >
                    {item.button}
                    <ArrowForwardIcon className="text-base" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
}

export default ResourcesComponent;
