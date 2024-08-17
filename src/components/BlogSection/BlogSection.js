import { getComponentText, imageFilePrefix } from "@/utils/functions/functions";
import React from "react";
import MainLayout from "../Layout/MainLayout";
import Link from "next/link";
import staticRoutes from "@/utils/routes/staticRoutes";

function BlogSection() {
  const content = getComponentText("home.blogSection");
  return (
    <MainLayout
      innerClass={
        "xl:pt-20 lg:pt-16 md:pt-14 pt-10 xl:pb-20 lg:pb-16 md:pb-14 pb-10 text-center"
      }
    >
      <h2 className="font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl px-3 ">
        {content.heading}
      </h2>
      <p className="text-paraSecondary xl:text-xl lg:text-lg md:text-base text-sm xl:w-[580px] lg:w-[500px] md:w-[460px] w-full md:px-0 px-3 xl:mt-3 lg:mt-2 mt-1 tracking-wide leading-normal inline-block ">
        {content.subHeading.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {item.para ? (
                <span>{item.para}</span>
              ) : (
                <a href={item.href} className="underline underline-offset-4">
                  {item.link}
                </a>
              )}
            </React.Fragment>
          );
        })}
      </p>
      <div className="relative pt-16">
        <div className="relative overflow-hidden flex">
          {content.blogList.map((item, index) => {
            return (
              <div key={index} className="w-[calc(100%/4)] flex-shrink-0 px-3 ">
                <div className="rounded-xl overflow-hidden text-start ">
                  <img
                    loading="lazy"
                    src={imageFilePrefix(item.imageUrl)}
                    alt={item.heading}
                    className="w-full aspect-auto"
                  />
                  <div className="px-2.5 pt-4 pb-3.5 border-x-2 border-b-2 rounded-b-xl ">
                    <p className="line-clamp-2 font-bold text-[23px] leading-[1.2] ">
                      {item.heading}
                    </p>
                    <p className="line-clamp-3 font-medium text-sm text-paraSecondary leading-snug mt-3 ">
                      {item.para}
                    </p>
                    <div className="mt-10 flex justify-between">
                      <p className="flex flex-col font-medium text-xs text-paraSecondary ">
                        <span>{item.publish}</span>
                        <span>{item.author}</span>
                      </p>
                      <Link
                        prefetch={false}
                        href={staticRoutes.blog}
                        className="bg-primaryColor text-black hover:bg-black hover:text-white px-3 py-1 rounded-md font-semibold text-md transition-all duration-300 ease-in-out"
                      >
                        {item.button}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}

export default BlogSection;
