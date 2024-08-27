"use client";
import React, { useState } from "react";
import MainLayout from "../Layout/MainLayout";
import {
  filePrefix,
  imageFilePrefix,
  svgFilePrefix,
} from "@/utils/functions/functions";
import { Inter } from "next/font/google";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PopupForm from "../UtilComponents/PopupForm/PopupForm";
import getMethodCall from "@/utils/services/services";

const inter = Inter({ subsets: ["latin"], weight: ["500"] });

function GrowthResourceDownload({ data }) {
  const ratingArray = new Array(5).fill(false).fill(true, 0, data.stars);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [inValid, setInValid] = useState(false);

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

  // Function to trigger the file download
  function triggerFileDownload() {
    const a = document.createElement("a");
    a.href = data.cta_url;
    a.download = data.resource_name; // Name the file here if you want to specify
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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

  //onSubmit function api
  async function onSubmitApi(e) {
    e.preventDefault();
    if (email !== "" && checkEmailValidation(email)) {
      if (email !== "" && phone !== "" && name !== "") {
        try {
          const response = await getMethodCall(
            `https://script.google.com/macros/s/AKfycbwWGLFIebBTTuhecu_5DldCE7iiTZcAPE_LXxZan-PCqO_PyrzFZHIdvJ6ag0J5w4dY/exec?name=${name}&phone=${phone}&email=${email}&location=${location}`
          );
          if (response.status === 200) {
            if (data.cta_url.includes("https://")) {
              window.open(data.cta_url, "_blank");
            } else {
              triggerFileDownload();
            }
            closeDialog();
          } else {
            throw new Error("Failed to Post Data");
          }
        } catch (error) {
          console.log("error", error);
        }
      }
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
        popupDownload={true}
        onClose={closeDialog}
        open={isDialogOpen}
        onChangeValue={onChangeValue}
        onSubmitApi={onSubmitApi}
        email={email}
        name={name}
        phone={phone}
        inValid={inValid}
      />
      <MainLayout
        innerClass={
          "xl:pt-12 lg:pt-10 md:pt-8 pt-6 xl:pb-6 lg:pb-5 md:pb-4 pb-2 "
        }
      >
        <div>
          <div
            style={{
              backgroundImage: `url(${data.featured_image})`,
            }}
            className="w-[55rem] mx-auto mt-0 h-[550px] bg-center bg-cover shadow-lg "
          />
          <div className="flex items-center justify-between xl:pt-8 lg:pt-6 pt-4 ">
            <div className="inline-flex flex-col xl:gap-y-7 lg:gap-y-6 md:gap-y-5 gap-y-3">
              <div className="flex">
                {ratingArray.map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={svgFilePrefix(
                        `${item ? "/blackStar.svg" : "/emptyStar.svg"}`
                      )}
                      alt="review start"
                      className="aspect-auto xl:w-6 lg:w-5 w-4"
                    />
                  );
                })}
              </div>
              <div className="flex lg:gap-x-2 gap-x-1">
                <img
                  loading="lazy"
                  src={svgFilePrefix("/download.svg")}
                  alt="download illustration"
                  className="aspect-auto w-4"
                />
                <span
                  className={
                    inter.className +
                    " font-medium xl:text-xl lg:text-lg md:text-base text-sm "
                  }
                >
                  +{data.Downloads} Downloads
                </span>
              </div>
            </div>
            <button
              onClick={openDialog}
              className="bg-primaryColor px-3 py-2 rounded-md font-medium xl:text-lg lg:text-base md:text-sm text-xs flex items-center lg:gap-x-2 gap-x-1 hover:gap-x-3 transition-all duration-300 ease-in-out "
            >
              {data.cta_text}
              <ArrowForwardIcon className="lg:text-lg text-base" />
            </button>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default GrowthResourceDownload;
