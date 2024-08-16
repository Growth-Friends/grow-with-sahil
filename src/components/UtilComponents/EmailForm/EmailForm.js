"use client";
import { getComponentText } from "@/utils/functions/functions";
import React, { useState } from "react";
import PopupForm from "../PopupForm/PopupForm";
import Input from "../Input/Input";

function EmailForm({ home, about }) {
  const content = getComponentText("util.emailForm");
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [email, setEmail] = useState("");

  //onchange email
  function onChangeEmail(value) {
    setEmail(value);
  }

  //open dialog box
  function openDialog() {
    setDialogOpen(true);
  }

  //closing dialog box
  function closeDialog() {
    setDialogOpen(false);
  }
  return (
    <>
      <PopupForm open={isDialogOpen} onClose={closeDialog} />
      <div className="inline-flex flex-wrap justify-center lg:gap-x-3 gap-x-2 gap-y-3 lg:text-lg text-base ">
        {content.inputList.map((item, index) => {
          return (
            <Input
              key={index}
              name={item.name}
              placeholder={item.placeholder}
              type={item.type}
              trueType={item.trueType}
              value={email}
              onChange={onChangeEmail}
              inputCss="text-slate-600 lg:px-3 px-2 lg:py-2 py-1.5 rounded-lg lg:w-[280px] w-[240px]"
            />
          );
        })}
        <button
          type="button"
          onClick={openDialog}
          className="bg-primaryColor text-black lg:py-2 py-1.5 lg:px-4 px-3 rounded-lg font-semibold "
        >
          {content.button[`${home ? "home" : about && "about"}`].para}
        </button>
      </div>
    </>
  );
}

export default EmailForm;
