import React from "react";
import MainLayout from "../Layout/MainLayout";
import { imageFilePrefix, svgFilePrefix } from "@/utils/functions/functions";
import { Inter } from "next/font/google";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const inter = Inter({ subsets: ["latin"], weight: ["500"] });

function GrowthResourceDownload() {
  const ratingArray = new Array(5).fill(false).fill(true, 0, 4);
  return (
    <MainLayout innerClass={"pt-12 pb-6"}>
      <div>
        <img
          src={imageFilePrefix("/resourcesImage.png")}
          alt="growth resources"
          className="w-full aspect-auto"
        />
        <div className="flex items-center justify-between pt-8">
          <div className="inline-flex flex-col gap-y-7">
            <div className="flex">
              {ratingArray.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={svgFilePrefix(
                      `${item ? "/blackStar.svg" : "/emptyStar.svg"}`
                    )}
                    alt="review start"
                    className="aspect-auto w-6"
                  />
                );
              })}
            </div>
            <div className="flex gap-x-2">
              <img
                loading="lazy"
                src={svgFilePrefix("/download.svg")}
                alt="download illustration"
                className="aspect-auto w-4"
              />
              <span className={inter.className + " font-medium text-xl "}>
                +250 Downloads
              </span>
            </div>
          </div>
          <Link
            prefetch={false}
            href={imageFilePrefix("/aboutPicture.png")}
            download={true}
            className="bg-primaryColor px-3 py-2 rounded-md font-medium text-lg flex items-center gap-x-2 hover:gap-x-3 transition-all duration-300 ease-in-out "
          >
            Download Now
            <ArrowForwardIcon className="text-lg" />
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}

export default GrowthResourceDownload;
