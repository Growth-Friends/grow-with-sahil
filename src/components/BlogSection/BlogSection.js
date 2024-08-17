"use client";
import { getComponentText, imageFilePrefix } from "@/utils/functions/functions";
import React, { useEffect, useRef, useState } from "react";
import MainLayout from "../Layout/MainLayout";
import Link from "next/link";
import staticRoutes from "@/utils/routes/staticRoutes";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

function BlogSection() {
  const content = getComponentText("home.blogSection");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRefs = useRef([]);
  const scrollContainer = useRef();

  //increase index
  function increaseIndex() {
    setCurrentIndex((previousIndex) => {
      const maxScrollWidth =
        scrollContainer.current.scrollWidth -
        scrollContainer.current.clientWidth;
      const currentScrollLeft =
        scrollRefs.current[previousIndex + 1].offsetLeft;
      if (currentScrollLeft <= maxScrollWidth) {
        return previousIndex + 1;
      } else {
        return previousIndex;
      }
    });
  }

  //decrease index
  function decreaseIndex() {
    setCurrentIndex((previousIndex) => {
      return previousIndex - 1 > 0 ? previousIndex - 1 : 0;
    });
  }

  useEffect(() => {
    if (scrollRefs.current[currentIndex] && scrollContainer.current) {
      const offset = scrollRefs.current[currentIndex].offsetLeft;
      scrollContainer.current.scrollTo({
        left: offset,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <MainLayout
      innerClass={
        "xl:pt-20 lg:pt-16 md:pt-14 pt-8 xl:pb-20 lg:pb-16 md:pb-14 pb-10 text-center"
      }
    >
      <h2 className="font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl ">
        {content.heading}
      </h2>
      <p className="text-paraSecondary xl:text-xl lg:text-lg md:text-base text-sm xl:w-[580px] lg:w-[500px] md:w-[460px] w-full xl:mt-3 lg:mt-2 mt-1 tracking-wide leading-normal inline-block ">
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
      <div className="relative xl:mt-16 lg:mt-14 md:mt-12 mt-10 ">
        <div
          className="relative md:overflow-hidden overflow-x-scroll flex"
          ref={scrollContainer}
        >
          {content.blogList.map((item, index) => {
            return (
              <div
                ref={(ref) => (scrollRefs.current[index] = ref)}
                key={index}
                className="lg:w-[calc(100%/4)] md:w-[calc(100%/3)] w-[220px] flex-shrink-0 xl:px-3 px-2 "
              >
                <div className="rounded-xl overflow-hidden text-start ">
                  <img
                    loading="lazy"
                    src={imageFilePrefix(item.imageUrl)}
                    alt={item.heading}
                    className="w-full aspect-auto"
                  />
                  <div className="px-2.5 pt-4 pb-3.5 border-x-2 border-b-2 rounded-b-xl ">
                    <p className="line-clamp-2 font-bold xl:text-[23px] lg:text-[19px] md:text-[18px] text-[17px] leading-[1.2] ">
                      {item.heading}
                    </p>
                    <p className="line-clamp-3 font-medium xl:text-sm md:text-xs text-[10px] text-paraSecondary leading-snug md:mt-3 mt-2 ">
                      {item.para}
                    </p>
                    <div className="xl:mt-10 mt-8 flex justify-between">
                      <p className="flex flex-col font-medium xl:text-xs text-[10px] text-paraSecondary ">
                        <span>{item.publish}</span>
                        <span>{item.author}</span>
                      </p>
                      <Link
                        prefetch={false}
                        href={staticRoutes.blog}
                        target="_blank"
                        className="bg-primaryColor text-black hover:bg-black hover:text-white xl:px-3 px-2 py-1 rounded-md font-semibold xl:text-base text-sm transition-all duration-300 ease-in-out"
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
        <div className="md:inline-flex hidden xl:mt-4 mt-3 xl:gap-x-2 gap-x-1.5 items-center text-slate-300">
          <ArrowCircleLeftRoundedIcon
            className="xl:text-3xl text-2xl cursor-pointer"
            onClick={decreaseIndex}
          />
          {[true, true, true].map((item, index) => {
            return (
              <div
                key={index}
                className="xl:border-[4px] border-[3px] rounded-full border-slate-100 "
              />
            );
          })}
          <ArrowCircleRightRoundedIcon
            className="xl:text-3xl text-2xl cursor-pointer"
            onClick={increaseIndex}
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default BlogSection;
