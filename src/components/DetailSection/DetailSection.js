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
                innerClass={`mt-12 ${array.length - 1 == index && "mb-12"} `}
              >
                {item.headingType === "h2" && (
                  <h2 className="font-bold text-3xl mb-5">{item.heading}</h2>
                )}
                {item.headingType === "h3" && (
                  <h3 className="font-bold text-2xl  mb-4">{item.heading}</h3>
                )}
                {item.headingType === "h4" && (
                  <h4 className="font-bold text-xl mb-3">{item.heading}</h4>
                )}
                {item.headingType === "h5" && (
                  <h5 className="font-bold text-lg mb-2.5">{item.heading}</h5>
                )}
                {item.paraList.map((item, index) => {
                  return (
                    <p key={index} className="text-paraSecondary mt-2">
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
