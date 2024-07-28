import React from "react";
import MainLayout from "../Layout/MainLayout";
import { getComponentText } from "@/utils/functions/functions";

function MarketingToolSection() {
  const content = getComponentText("home.marketingToolSection");
  return (
    <MainLayout
      innerClass={"bg-black text-white rounded-3xl text-center py-10 "}>
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
    </MainLayout>
  );
}

export default MarketingToolSection;
