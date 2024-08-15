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
      innerClass="py-10 "
    >
      <div className="text-center">
        <p className="text-paraSecondary text-2xl w-[630px] tracking-wide leading-normal mx-auto">
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
          <div className="inline-flex items-center flex-wrap font-medium text-lg gap-x-6 mt-4 ">
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
          <EmailForm home={true} />
        </div>
      </div>
    </MainLayout>
  );
}

export default EmailPromotion;
