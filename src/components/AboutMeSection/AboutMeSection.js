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

  return (
    <MainLayout>
      <div className="py-20 overflow-hidden ">
        <div className="text-center bg-black text-white py-8 px-3 rounded-t-2xl">
          <h2 className="font-bold text-4xl uppercase ">{content.heading}</h2>
        </div>
        <div className="grid grid-flow-col grid-cols-12 p-8 gap-8 border-x-2 border-b-2 border-paraSecondary/40 rounded-b-2xl">
          <div className="col-span-4">
            <img
              loading="lazy"
              alt="sahil khan image"
              src={imageFilePrefix("/profilePicture.png")}
              className="aspect-auto w-full max-w-none rounded-xl "
            />
          </div>
          <div className="col-span-8 self-end">
            <h3 className="uppercase font-bold text-3xl">{content.name}</h3>
            <p className="uppercase font-semibold text-xl mt-0.5">
              {content.position}
            </p>
            <p className="text-paraSecondary mt-4">{content.aboutMe}</p>
            <div className="flex items-center gap-x-4 mt-10">
              {content.socialShareList.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.link}
                    target="_blank"
                    prefetch={true}
                    className="bg-black rounded-full p-1.5"
                  >
                    <img
                      loading="lazy"
                      src={svgFilePrefix(item.imageUrl)}
                      alt="linkedin icon"
                      className="aspect-auto w-4"
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
