"use client";
import MainLayout from "@/components/Layout/MainLayout";
import EmailForm from "@/components/UtilComponents/EmailForm/EmailForm";
import { getComponentText, svgFilePrefix } from "@/utils/functions/functions";
import React, { useRef } from "react";

export let emailPromotionRef;

function EmailPromotion() {
  emailPromotionRef = useRef();
  const content = getComponentText("util.detailSection.emailPromotion");
  return (
    <MainLayout
      ref={emailPromotionRef}
      outerClass={"bg-black text-white mt-12"}
      innerClass="lg:py-10 md:py-8 py-6 "
    >
      <div className="text-center">
        <p className="text-paraSecondary xl:text-2xl lg:text-xl md:text-lg text-sm xl:w-[630px] lg:w-[580px] md:w-[500px] w-full tracking-wide leading-normal mx-auto">
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
          <div className="inline-flex items-start lg:flex-row flex-col font-medium xl:text-lg lg:text-base md:text-sm text-xs gap-x-6 gap-y-1 mt-4 ">
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
        <div className="mt-7">
          <EmailForm home={true} />
        </div>
      </div>
    </MainLayout>
  );
}

export default EmailPromotion;
