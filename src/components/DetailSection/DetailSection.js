import React from "react";
import MainLayout from "../Layout/MainLayout";
import { getComponentText } from "@/utils/functions/functions";
import EmailPromotion from "./Promotions/EmailPromotion";

function DetailSection() {
  const content = getComponentText("util.detailSection");
  return (
    <div>
      {content.contentList.map((item, index, array) => {
        return (
          <React.Fragment key={index}>
            {item.type === "heading-para" && (
              <MainLayout
                innerClass={`lg:mt-12 mt-8 ${
                  array.length - 1 == index && "lg:mb-12 mb-8"
                } `}
              >
                {item.headingType === "h2" && (
                  <h2 className="font-bold lg:text-3xl text-2xl lg:mb-5 mb-4 ">
                    {item.heading}
                  </h2>
                )}
                {item.headingType === "h3" && (
                  <h3 className="font-bold lg:text-2xl text-xl lg:mb-4 mb-3 ">
                    {item.heading}
                  </h3>
                )}
                {item.headingType === "h4" && (
                  <h4 className="font-bold lg:text-xl text-lg lg:mb-3 mb-2.5 ">
                    {item.heading}
                  </h4>
                )}
                {item.headingType === "h5" && (
                  <h5 className="font-bold lg:text-lg text-base lg:mb-2.5 mb-2">
                    {item.heading}
                  </h5>
                )}
                {item.paraList.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="text-paraSecondary lg:text-base text-sm mt-3 "
                    >
                      {item.para}
                    </p>
                  );
                })}
              </MainLayout>
            )}
            {item.type === "email-promotion" && <EmailPromotion />}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default DetailSection;
