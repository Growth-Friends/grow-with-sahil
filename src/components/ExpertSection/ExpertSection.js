import React from "react";
import MainLayout from "../Layout/MainLayout";
import { getComponentText } from "@/utils/functions/functions";

function ExpertSection() {
  const content = getComponentText("home.expertSection");
  return (
    <MainLayout innerClass={"py-20"}>
      <div className="flex items-center justify-between ">
        <h2 className="font-semibold text-6xl flex flex-col leading-snug ">
          {content.heading.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </h2>
        <img
          src="/svg/sittingMan.svg"
          alt="sitting man"
          className="aspect-auto w-48"
        />
      </div>
      <div className="grid grid-cols-3 gap-20 py-20 ">
        {content.expertList.map((item, index) => {
          return (
            <div
              key={index}
              className="text-center ">
              <div className="bg-black p-5 rounded-full aspect-square w-[86px] inline-flex items-center ">
                <img
                  src={item.imageUrl}
                  alt={item.head}
                  className="aspect-auto w-full"
                />
              </div>
              <p className="font-semibold text-2xl mt-5 ">{item.head}</p>
              <p className="text-bgBlackPara mt-3 px-3 ">{item.para}</p>
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
}

export default ExpertSection;
