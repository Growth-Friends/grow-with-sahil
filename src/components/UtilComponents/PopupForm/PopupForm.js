"use client";
import { getComponentText } from "@/utils/functions/functions";
import { Dialog } from "@mui/material";
import React, { useState } from "react";
import Input from "../Input/Input";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function PopupForm({ open, onClose, onChangeValue, phone, name, onSubmitApi }) {
  const content = getComponentText("util.popupForm");

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="w-[420px] relative p-6 ">
        <CloseRoundedIcon
          onClick={onClose}
          className="absolute top-1 right-1 text-3xl cursor-pointer "
        />
        <h2 className="flex flex-col font-bold text-2xl items-center ">
          {content.heading.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </h2>
        <form className="flex flex-col gap-y-3 mt-8  ">
          {content.inputList.map((item, index) => {
            return (
              <Input
                key={index}
                name={item.name}
                placeholder={item.placeholder}
                type={item.type}
                trueType={item.trueType}
                value={
                  item.name === "name" ? name : item.name === "phone" && phone
                }
                onChange={onChangeValue}
                inputCss="text-slate-600 lg:px-3 px-2 lg:py-2 py-1.5 rounded-lg border-2 border-slate-200/70 "
              />
            );
          })}
          <div className="flex items-center justify-center mt-3">
            <button
              type="submit"
              onClick={onSubmitApi}
              className="bg-primaryColor text-black px-20 py-3 rounded font-medium "
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
