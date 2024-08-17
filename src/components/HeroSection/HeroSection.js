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
      outerClass="bg-black text-white xl:h-screen h-auto "
      innerClass="h-full flex flex-col justify-center relative lg:py-48 md:py-36 pt-28 "
    >
      <div className="relative z-10 md:text-start text-center">
        <h1 className="flex flex-col font-bold xl:text-[54px] lg:text-[45px] md:text-[38px] text-[24px] leading-[1.35] py-0 ">
          {content.heading.map((item, index) => {
            return (
              <span key={index}>
                {item.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className={`${
                        item.styleBg &&
                        "text-black bg-primaryColor px-3 rounded-lg "
                      }`}
                    >
                      {item.para}
                    </span>
                  );
                })}
              </span>
            );
          })}
        </h1>
        <p className="text-paraSecondary xl:text-xl lg:text-lg md:text-base text-sm xl:w-[580px] lg:w-[500px] md:w-[460px] w-full mt-4 tracking-wide leading-normal ">
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
        <div className="flex items-center md:justify-start justify-center">
          {content?.benefitsList && (
            <div className="flex items-start lg:flex-row flex-col font-medium xl:text-lg lg:text-base md:text-sm text-xs gap-x-6 gap-y-1 mt-4 ">
              {content.benefitsList.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-x-2">
                    <img
                      src={svgFilePrefix(item.imageUrl)}
                      alt={item.alt}
                      className="aspect-auto md:w-4 w-3"
                    />
                    <p>{item.para}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div
          className={`lg:mt-10 md:mt-8 ${home ? "mt-10" : about && "mt-6"} `}
        >
          <EmailForm home={home} about={about} />
        </div>
        <div
          className={`md:hidden block w-full ${
            home ? "mt-14" : about && "mt-2"
          } `}
        >
          <img
            loading="lazy"
            src={imageFilePrefix(content.mainImageUrl)}
            alt="shail profile picture"
            className={`h-auto max-w-none ms-auto ${
              home ? "w-full" : about && "w-[70%] max-w-[300px] -mr-[20px] "
            }  `}
          />
        </div>
      </div>
      <div
        className={`hidden md:block absolute lg:w-[50%] w-[55%] bottom-0 right-0 ${
          home ? "translate-x-[10%]" : about && ""
        } `}
      >
        <img
          loading="lazy"
          src={imageFilePrefix(content.mainImageUrl)}
          alt="shail profile picture"
          className={`h-auto max-w-none ms-auto ${
            home
              ? "w-full"
              : about &&
                "xl:w-[380px] lg:w-[340px] w-[250px] lg:-mr-0 -mr-[40px] "
          }  `}
        />
      </div>
    </MainLayout>
  );
}

export default HeroSection;
