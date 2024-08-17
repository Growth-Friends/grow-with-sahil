"use client";
import { getComponentText } from "@/utils/functions/functions";
import React, { useState } from "react";
import PopupForm from "../PopupForm/PopupForm";
import Input from "../Input/Input";
import { usePathname } from "next/navigation";
import getMethodCall from "@/utils/services/services";

function EmailForm({ home, about }) {
  const content = getComponentText("util.emailForm");
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [inValid, setInValid] = useState(false);

  //location
  const location = usePathname();

  //onchange email
  function onChangeValue(value, key) {
    if (key === "name") {
      setName(value);
    } else if (key === "phone") {
      setPhone(value);
    } else if (key === "email") {
      setEmail(value);
      setInValid(false);
    }
  }

  //onSubmit function api
  async function onSubmitApi(e) {
    e.preventDefault();
    if (email !== "" && phone !== "" && name !== "") {
      try {
        const response = await getMethodCall(
          `https://script.google.com/macros/s/AKfycbwWGLFIebBTTuhecu_5DldCE7iiTZcAPE_LXxZan-PCqO_PyrzFZHIdvJ6ag0J5w4dY/exec?name=${name}&phone=${phone}&email=${email}&location=${location}`
        );
        if (response.status === 200) {
          closeDialog();
        } else {
          throw new Error("Failed to Post Data");
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  }

  // Check email validation function
  function checkEmailValidation(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  //onSubmit dialog box
  function onSubmitDialogBox(e) {
    e.preventDefault();
    if (email !== "" && checkEmailValidation(email)) {
      openDialog();
    } else if (email !== "" && !checkEmailValidation(email)) {
      setInValid(true);
    }
  }

  //open dialog box
  function openDialog() {
    setDialogOpen(true);
  }

  //closing dialog box
  function closeDialog() {
    setDialogOpen(false);
    setEmail("");
    setName("");
    setPhone("");
    setInValid(false);
  }
  return (
    <>
      <PopupForm
        open={isDialogOpen}
        onClose={closeDialog}
        onChangeValue={onChangeValue}
        name={name}
        phone={phone}
        onSubmitApi={onSubmitApi}
      />
      <div
        className={`inline-flex flex-wrap justify-center lg:gap-x-3 gap-x-2 ${
          inValid ? "gap-y-6" : "gap-y-3"
        }  lg:text-lg text-base `}
      >
        {content.inputList.map((item, index) => {
          return (
            <div className="relative">
              <Input
                key={index}
                name={item.name}
                placeholder={item.placeholder}
                type={item.type}
                trueType={item.trueType}
                value={email}
                onChange={onChangeValue}
                required={true}
                inputCss="text-slate-600 lg:px-3 px-2 lg:py-2 py-1.5 rounded-lg lg:w-[280px] w-[240px]"
              />
              {inValid && (
                <p className="absolute md:text-sm text-xs md:mt-2 mt-1 w-full text-center text-red-500 ">
                  Invalid Email
                </p>
              )}
            </div>
          );
        })}
        <button
          type="submit"
          onClick={onSubmitDialogBox}
          className="bg-primaryColor text-black lg:py-2 py-1.5 lg:px-4 px-3 rounded-lg font-semibold "
        >
          {content.button[`${home ? "home" : about && "about"}`].para}
        </button>
      </div>
    </>
  );
}

export default EmailForm;
