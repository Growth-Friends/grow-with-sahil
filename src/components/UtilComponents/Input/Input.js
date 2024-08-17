"use client";
import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

function Input({
  placeholder,
  value = "",
  onChange = () => {},
  trueType,
  required,
  type,
  name = "",
  inputCss = "",
}) {
  //onchange input
  function onChangeInput(e) {
    let value = e.target.value;
    if (trueType === "number") {
      value = value.replace(/[^0-9]/g, "");
      onChange(value, name);
    } else if (trueType === "text") {
      value = value.replace(/[^a-zA-Z]/g, "");
      onChange(value, name);
    } else if (trueType == "email") {
      value = value.replace(/[ ]/g, "");
      onChange(value, name);
    } else if (trueType == "phone") {
      value = value.replace(/[^0-9]/g, "").slice(0, 10);
      onChange(value, name);
    }
  }
  return (
    <input
      name={name}
      type={type}
      required={required}
      className={roboto.className + ` outline-none ${inputCss} `}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChangeInput(e)}
    />
  );
}

export default Input;
