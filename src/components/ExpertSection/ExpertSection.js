import React from "react";
import MainLayout from "../Layout/MainLayout";
import {
  filePrefix,
  getComponentText,
  svgFilePrefix,
} from "@/utils/functions/functions";
import Link from "next/link";

function ExpertSection() {
  const content = getComponentText("home.expertSection");
  return (
    <MainLayout innerClass={"xl:py-20 md:py-14 py-12"}>
      <div className="flex items-center justify-between ">
        <h2 className="font-semibold xl:text-6xl lg:text-5xl md:text-4xl text-3xl flex flex-col leading-snug ">
          {content.heading.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </h2>
        <img
          src="/svg/sittingMan.svg"
          alt="sitting man"
          className="aspect-auto xl:w-48 lg:w-36 md:w-28 w-20 "
        />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 xl:gap-20 lg:gap-8 md:gap-4 gap-x-0.5 gap-y-5 xl:py-20 md:py-12 py-10 ">
        {content.expertList.map((item, index) => {
          return (
            <Link
              prefetch={false}
              href={filePrefix(item.link, "/services")}
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 ease-in-out lg:px-2 px-0 py-4 rounded-lg "
            >
              <div className="bg-black xl:p-5 lg:p-4 p-3.5 rounded-full aspect-square xl:w-[86px] lg:w-[75px] w-[65px] inline-flex items-center ">
                <img
                  src={svgFilePrefix(item.imageUrl)}
                  alt={item.head}
                  className="aspect-auto w-full "
                />
              </div>
              <p className="font-semibold xl:text-2xl lg:text-xl md:text-lg text-sm lg:mt-5 mt-4 ">
                {item.head}
              </p>
              <p className="text-paraSecondary lg:mt-3 mt-2 px-3 xl:text-base lg:text-sm md:text-xs text-[10px] ">
                {item.para}
              </p>
            </Link>
          );
        })}
      </div>
    </MainLayout>
  );
}

export default ExpertSection;
