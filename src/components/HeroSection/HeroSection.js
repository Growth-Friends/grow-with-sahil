"use client";
import React, { useRef } from "react";
import MainLayout from "../Layout/MainLayout";
import {
  getComponentText,
  imageFilePrefix,
  svgFilePrefix,
} from "@/utils/functions/functions";
import EmailForm from "../UtilComponents/EmailForm/EmailForm";

export let heroSectionRef;

function HeroSection({ home, about }) {
  const content = getComponentText(
    `${home ? "home" : about && "about"}.heroSection`
  );
  heroSectionRef = useRef();
  return (
    <MainLayout
      ref={heroSectionRef}
      outerClass="bg-black text-white h-screen "
      innerClass="h-full flex flex-col justify-center relative "
    >
      <div className="relative z-10">
        <h1 className="flex flex-col font-bold text-[54px] leading-[1.35] ">
          {content.heading.map((item, index) => {
            return (
              <span key={index}>
                {item.map((ele, idx) => {
                  return (
                    <span
                      key={idx}
                      className={`${
                        ele.styleBg &&
                        "text-black bg-primaryColor px-3 rounded-lg "
                      }`}
                    >
                      {ele.para}
                    </span>
                  );
                })}
              </span>
            );
          })}
        </h1>
        <p className="text-paraSecondary text-xl w-[580px] mt-3 tracking-wide leading-normal ">
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
        {content?.benefitsList && (
          <div className="flex items-center flex-wrap font-medium text-lg gap-x-6 mt-4 ">
            {content.benefitsList.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-x-2">
                  <img
                    src={svgFilePrefix(item.imageUrl)}
                    alt={item.alt}
                    className="aspect-auto w-4"
                  />
                  <p>{item.para}</p>
                </div>
              );
            })}
          </div>
        )}
        <div className="mt-7">
          <EmailForm home={home} about={about} />
        </div>
      </div>
      <div
        className={`absolute w-[50%] bottom-0 right-0 ${
          home ? "translate-x-[10%]" : about && ""
        } `}
      >
        <img
          loading="lazy"
          src={imageFilePrefix(content.mainImageUrl)}
          alt="shail profile picture"
          className={`h-auto max-w-none ms-auto ${
            home ? "w-full" : about && "w-[380px] "
          }  `}
        />
      </div>
    </MainLayout>
  );
}

export default HeroSection;
