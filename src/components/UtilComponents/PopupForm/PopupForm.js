"use client";
import { getComponentText } from "@/utils/functions/functions";
import { Dialog } from "@mui/material";
import React, { useState } from "react";
import Input from "../Input/Input";

function PopupForm({ open, onClose }) {
  const content = getComponentText("util.popupForm");
  const [popupInput, setPopupInput] = useState({ name: "", phone: "" });

  //onchange input
  function onChangePopupInput(value, key) {
    console.log(key, value);
    if (key === "name") {
      setPopupInput((previousInput) => {
        return { ...previousInput, [key]: value };
      });
    } else if (key === "phone") {
      setPopupInput((previousInput) => {
        return { ...previousInput, [key]: value };
      });
    }
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}>
      <div>
        <form className="flex flex-col">
          {content.inputList.map((item, index) => {
            return (
              <Input
                key={index}
                name={item.name}
                placeholder={item.placeholder}
                type={item.type}
                trueType={item.trueType}
                value={popupInput[`${item.name}`]}
                onChange={onChangePopupInput}
                inputCss="text-slate-600"
              />
            );
          })}
          <button
            type="button"
            className="bg-primaryColor text-black ">
            {content.button.para}
          </button>
        </form>
      </div>
    </Dialog>
  );
}

export default PopupForm;
