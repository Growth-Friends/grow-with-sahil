"use client";
import React, { useEffect, useRef, useState } from "react";
import MainLayout from "../Layout/MainLayout";
import { filePrefix, getComponentText } from "@/utils/functions/functions";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function GrowthResourcesSection() {
  const content = getComponentText("home.growthResourcesSection");
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
    <MainLayout innerClass={"xl:pt-20 lg:pt-16 md:pt-14 pt-10 text-center"}>
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
      <div className="xl:mt-14 lg:mt-12 md:mt-10 mt-8  text-start relative">
        <span
          className="absolute md:block hidden left-0 -translate-x-2/3 top-1/2 -translate-y-1/2 font-bold text-5xl cursor-pointer select-none"
          onClick={decreaseIndex}
        >{`<`}</span>
        <div
          className="flex md:overflow-hidden overflow-x-scroll relative xl:max-w-[65rem] lg:max-w-[58rem] md:max-w-[37rem] max-w-none mx-auto "
          ref={scrollContainer}
        >
          {content.growthResourcesList.map((item, index) => {
            return (
              <div
                key={index}
                ref={(ref) => (scrollRefs.current[index] = ref)}
                className="lg:w-[calc(100%/3)] md:w-[calc(100%/2)] w-[230px] md:px-0 px-2 flex-shrink-0 "
              >
                <div className=" bg-black text-white md:p-4 p-2.5 md:pb-4 pb-3 rounded-xl xl:max-w-[320px] lg:max-w-[284px] md:max-w-[270px] max-w-none mx-auto ">
                  <div className="bg-white md:h-40 h-28 rounded-xl"></div>
                  <p className="font-bold xl:text-[22px] lg:text-[20px] md:text-[18px] text-[15px] leading-snug mt-2.5">
                    {item.heading}
                  </p>
                  <p className="text-paraSecondary xl:text-sm md:text-xs text-[10px] tracking-wide leading-normal mt-1 inline-block ">
                    {item.para.map((item, index) => {
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
                  <div className="mt-5 text-center">
                    <Link
                      prefetch={false}
                      href={filePrefix(item.link, "/growth-resources")}
                      className="bg-primaryColor text-black md:px-3 px-2 xl:py-2 lg:py-1.5 py-1 rounded-md font-semibold inline-flex items-center xl:text-lg md:text-base text-sm xl:gap-x-2 lg:gap-x-1.5 md:gap-x-1 gap-x-0.5 hover:gap-x-4 transition-all duration-300 ease-in-out "
                    >
                      {item.button}
                      <ArrowForwardIcon className="lg:text-xl md:text-lg text-base " />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <span
          className="absolute md:block hidden right-0 translate-x-2/3 top-1/2 -translate-y-1/2 font-bold text-5xl cursor-pointer select-none"
          onClick={increaseIndex}
        >{`>`}</span>
      </div>
    </MainLayout>
  );
}

export default GrowthResourcesSection;
