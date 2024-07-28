"use client";
import { getComponentText } from "@/utils/functions/functions";
import React, { useState } from "react";
import PopupForm from "../PopupForm/PopupForm";
import Input from "../Input/Input";

function EmailForm() {
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
      <PopupForm
        open={isDialogOpen}
        onClose={closeDialog}
      />
      <div className="flex gap-x-3 text-lg">
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
              inputCss="text-slate-600 px-3 py-2 rounded-lg w-[280px] "
            />
          );
        })}
        <button
          type="button"
          onClick={openDialog}
          className="bg-primaryColor text-black px-4 rounded-lg font-semibold ">
          {content.button.para}
        </button>
      </div>
    </>
  );
}

export default EmailForm;
