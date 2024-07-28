"use client";
import React, { useRef } from "react";
import MainLayout from "../Layout/MainLayout";
import { getComponentText } from "@/utils/functions/functions";
import EmailForm from "../UtilComponents/EmailForm/EmailForm";

export let heroSectionRef;

function HeroSection() {
  const content = getComponentText("home.heroSection");
  heroSectionRef = useRef();
  return (
    <MainLayout
      ref={heroSectionRef}
      outerClass="bg-black text-white "
      innerClass="py-72 relative ">
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
                      }`}>
                      {ele.para}
                    </span>
                  );
                })}
              </span>
            );
          })}
        </h1>
        <p className="text-bgBlackPara text-xl w-[580px] mt-3 tracking-wide leading-normal ">
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
        <div className="flex items-center flex-wrap font-medium text-lg gap-x-6 mt-4 ">
          {content.benefitsList.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-x-2">
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="aspect-auto w-4"
                />
                <p>{item.para}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-7">
          <EmailForm />
        </div>
      </div>
      <div className="absolute w-[50%] bottom-0 right-0 translate-x-[20%] ">
        <img
          loading="lazy"
          src="/images/profilePicture.png"
          alt="shail profile picture"
          className="aspect-auto w-full"
        />
      </div>
    </MainLayout>
  );
}

export default HeroSection;
