"use client";
import React, { useEffect, useRef, useState } from "react";
import MainLayout from "../Layout/MainLayout";
import { getComponentText } from "@/utils/functions/functions";
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
      <div className="mt-14 text-start relative">
        <span
          className="absolute left-0 top-1/2 -translate-y-1/2 font-bold text-5xl cursor-pointer select-none"
          onClick={decreaseIndex}>{`<`}</span>
        <div
          className="flex overflow-hidden relative max-w-[70rem] mx-auto "
          ref={scrollContainer}>
          {content.growthResourcesList.map((item, index) => {
            return (
              <div
                key={index}
                ref={(ref) => (scrollRefs.current[index] = ref)}
                className="w-[calc(100%/3)] flex-shrink-0 px-4 ">
                <div className=" bg-black text-white p-4 rounded-xl">
                  <div className="bg-white h-40 rounded-xl"></div>
                  <p className="font-bold text-[22px] leading-snug mt-2.5">
                    {item.heading}
                  </p>
                  <p className="text-bgBlackPara text-sm tracking-wide leading-normal mt-1 inline-block ">
                    {item.para.map((item, index) => {
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
                  <div className="mt-5 text-center">
                    <Link
                      prefetch={false}
                      href={item.link}
                      className="bg-primaryColor text-black px-3 py-1 rounded-lg font-semibold inline-flex items-center text-lg gap-x-2 hover:gap-x-4 transition-all duration-300 ease-in-out ">
                      {item.button}
                      <ArrowForwardIcon className="text-xl" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 font-bold text-5xl cursor-pointer select-none"
          onClick={increaseIndex}>{`>`}</span>
      </div>
    </MainLayout>
  );
}

export default GrowthResourcesSection;
