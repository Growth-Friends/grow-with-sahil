import { getComponentText, imageFilePrefix } from "@/utils/functions/functions";
import React from "react";
import MainLayout from "../Layout/MainLayout";

function BlogSection() {
  const content = getComponentText("home.blogSection");
  return (
    <MainLayout innerClass={"pt-20 pb-4 text-center"}>
      <h2 className="font-bold text-5xl ">{content.heading}</h2>
      <p className="text-bgBlackPara text-xl w-[580px] mt-3 tracking-wide leading-normal inline-block ">
        {content.subHeading.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {item.para ? (
                <span>{item.para}</span>
              ) : (
                <a
                  href={item.href}
                  className="underline underline-offset-4">
                  {item.link}
                </a>
              )}
            </React.Fragment>
          );
        })}
      </p>
      <div className="relative py-16">
        <div className="relative overflow-hidden flex">
          {content.blogList.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[calc(100%/4)] flex-shrink-0 px-3 ">
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
                    <p className="line-clamp-3 font-medium text-sm text-bgBlackPara leading-snug mt-3 ">
                      {item.para}
                    </p>
                    <div className="mt-10 flex justify-between">
                      <p className="flex flex-col font-medium text-xs text-bgBlackPara ">
                        <span>{item.publish}</span>
                        <span>{item.author}</span>
                      </p>
                      <button className="bg-primaryColor text-black hover:bg-black hover:text-primaryColor px-3 py-1 rounded-md font-semibold text-md transition-all duration-300 ease-in-out">
                        {item.button}
                      </button>
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
