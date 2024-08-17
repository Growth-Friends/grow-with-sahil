"use client";
import { getComponentText } from "@/utils/functions/functions";
import { Dialog } from "@mui/material";
import React, { useState } from "react";
import Input from "../Input/Input";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

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
  download = "",
}) {
  const content = getComponentText(
    `util.${popupForm ? "popupForm" : popupDownload && "popupDownload"}`
  );

  return (
    <Dialog open={open}>
      <div className="lg:w-[420px] md:w-[380px] w-full relative md:p-6 p-4 py-6 ">
        <CloseRoundedIcon
          onClick={onClose}
          className="absolute top-1 right-1 md:text-3xl text-xl cursor-pointer "
        />
        <h2 className="flex flex-col font-bold md:text-2xl text-xl items-center ">
          {content.heading.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </h2>
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
      </div>
    </Dialog>
  );
}

export default PopupForm;
