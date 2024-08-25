"use client";
import { getComponentText, svgFilePrefix } from "@/utils/functions/functions";
import { Dialog } from "@mui/material";
import React, { useState } from "react";
import Input from "../Input/Input";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Link from "next/link";

function PopupForm({
  open,
  onClose,
  onChangeValue,
  email,
  phone,
  name,
  onSubmitApi,
  popupForm,
  popupDownload,
  inValid,
}) {
  const content = getComponentText(
    `util.${popupForm ? "popupForm" : popupDownload && "popupDownload"}`
  );
  const thankyouContent = getComponentText(
    `util.${
      popupForm ? "popupThankyou" : popupDownload && "popupDownloadThankyou"
    }`
  );
  const socialShareList = getComponentText("util.socialShareList");
  const [thankyou, setThankyou] = useState(false);

  return (
    <Dialog open={open}>
      <div className="lg:w-[420px] md:w-[380px] w-full relative md:p-6 p-4 py-6 ">
        <CloseRoundedIcon
          onClick={onClose}
          className="absolute top-1 right-1 md:text-3xl text-xl cursor-pointer "
        />
        {!thankyou ? (
          <>
            <h2 className="flex flex-col font-bold md:text-2xl text-xl items-center ">
              {content.heading.map((item, index) => {
                return <span key={index}>{item}</span>;
              })}
            </h2>{" "}
            <form className="flex flex-col gap-y-3 md:mt-6 mt-4 relative ">
              {content.inputList.map((item, index) => {
                return (
                  <div className="grid relative" key={index}>
                    <Input
                      name={item.name}
                      placeholder={item.placeholder}
                      type={item.type}
                      trueType={item.trueType}
                      value={
                        item.name === "name"
                          ? name
                          : item.name === "phone"
                          ? phone
                          : item.name === "email" && email
                      }
                      onChange={onChangeValue}
                      inputCss={`text-slate-600 lg:px-3 px-2 lg:py-2 py-1.5 rounded-lg border-2 border-slate-200/70 ${
                        inValid && item.name === "email" && "mb-3"
                      } `}
                    />
                    {inValid && item.name === "email" && (
                      <p className="absolute bottom-0 translate-y-1/2 md:text-sm text-xs w-full text-center text-red-500 ">
                        Invalid Email
                      </p>
                    )}
                  </div>
                );
              })}
              <div className="flex justify-center md:mt-3 mt-2">
                <button
                  type="submit"
                  onClick={onSubmitApi}
                  className="bg-primaryColor text-black lg:px-20 px-16 md:w-auto w-full lg:py-3 py-2 rounded font-medium "
                >
                  {content.button.para}
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h2 className="flex flex-col font-bold md:text-2xl text-xl items-center ">
              {thankyouContent.heading.map((item, index) => {
                return <span key={index}>{item}</span>;
              })}
            </h2>
            <p className="font-semibold text-center md:text-base text-sm md:mt-4 mt-3">
              {thankyouContent.mainPara}
            </p>
            <p className="font-semibold text-center md:text-base text-sm md:mt-7 mt-6">
              {thankyouContent.socialPara}
            </p>
            <div className="flex items-center justify-center gap-x-3 xl:mt-3 lg:mt-3 mt-2">
              {socialShareList.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.link}
                    target="_blank"
                    prefetch={false}
                    className="bg-black rounded-full p-2"
                  >
                    <img
                      loading="lazy"
                      src={svgFilePrefix(item.imageUrl)}
                      alt="linkedin icon"
                      className="aspect-auto xl:w-3.5 w-3 "
                    />
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
    </Dialog>
  );
}

export default PopupForm;
