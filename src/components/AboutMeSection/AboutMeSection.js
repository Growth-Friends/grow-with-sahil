import React from "react";
import MainLayout from "../Layout/MainLayout";
import {
  getComponentText,
  imageFilePrefix,
  svgFilePrefix,
} from "@/utils/functions/functions";
import Link from "next/link";

function AboutMeSection() {
  const content = getComponentText("util.aboutMeSection");
  const socialShareList = getComponentText("util.socialShareList");

  return (
    <MainLayout>
      <div className="xl:py-20 lg:py-16 md:py-14 py-12 overflow-hidden ">
        <div className="text-center bg-black text-white xl:py-8 py-6 px-3 rounded-t-2xl">
          <h2 className="font-bold xl:text-4xl lg:text-3xl text-2xl uppercase ">
            {content.heading}
          </h2>
        </div>
        <div className="grid md:grid-flow-col grid-flow-row md:grid-rows-1 grid-rows-auto grid-cols-12 xl:p-8 lg:p-6 p-4 xl:gap-8 lg:gap-6 gap-4 border-x-2 border-b-2 border-paraSecondary/40 rounded-b-2xl">
          <div className="md:col-span-4 col-span-full md:self-end self-auto">
            <img
              loading="lazy"
              alt="sahil khan image"
              src={imageFilePrefix("/profilePicture.png")}
              className="aspect-auto w-full max-w-none xl:rounded-xl rounded-lg "
            />
          </div>
          <div className="md:col-span-8 col-span-full md:self-end self-auto ">
            <h3 className="uppercase font-bold xl:text-3xl lg:text-2xl text-xl ">
              {content.name}
            </h3>
            <p className="uppercase font-semibold xl:text-xl lg:text-lg text-base lg:mt-0.5 mt-[1px] ">
              {content.position}
            </p>
            <p className="text-paraSecondary xl:text-base lg:text-sm text-xs xl:mt-4 lg:mt-3 mt-2">
              {content.aboutMe}
            </p>
            <div className="flex items-center gap-x-4 xl:mt-10 lg:mt-8 mt-6">
              {socialShareList.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.link}
                    target="_blank"
                    prefetch={false}
                    className="bg-black rounded-full p-1.5"
                  >
                    <img
                      loading="lazy"
                      src={svgFilePrefix(item.imageUrl)}
                      alt="linkedin icon"
                      className="aspect-auto xl:w-4 md:w-3 w-4 "
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default AboutMeSection;
