"use client";

import React, { useState } from "react";
import Input from "../UtilComponents/Input/Input";
import { usePathname } from "next/navigation";

const ContactMeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [thankyou, setThankyou] = useState(false);
  const [inValid, setInValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const location = usePathname();

  // API URL
  const API_URL =
    "https://script.google.com/macros/s/AKfycbwWGLFIebBTTuhecu_5DldCE7iiTZcAPE_LXxZan-PCqO_PyrzFZHIdvJ6ag0J5w4dY/exec";

  // Handle input value change
  const onChangeValue = (value, key) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
    if (key === "email") {
      setInValid(false);
    }
  };

  // Check email validation
  const checkEmailValidation = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Handle form submission via API
  const onSubmitApi = async (e) => {
    e.preventDefault();
    const { name, email, phone } = formData;

    if (name !== "" && email !== "" && phone !== "") {
      setIsLoading(true); // Set loading state when the form is being submitted
      try {
        const response = await fetch(
          `${API_URL}?name=${name}&phone=${phone}&email=${email}&location=${location}`
        );
        if (response.ok) {
          setThankyou(true);
          setFormData({ name: "", email: "", phone: "" });
        } else {
          throw new Error("Failed to Post Data");
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false); // Turn off loading state after submission is complete
      }
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { email } = formData;
    if (email !== "" && checkEmailValidation(email)) {
      onSubmitApi(e);
    } else if (email !== "" && !checkEmailValidation(email)) {
      setInValid(true);
    }
  };

  return (
    <div className="py-20 flex items-center justify-center p-4">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-lg bg-white rounded-lg shadow-lg border-2 p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Contact Me
        </h2>
        <p className="text-gray-700 mb-6 text-sm md:text-base">
          Feel free to reach out to me by filling out the form below.
        </p>

        {thankyou ? (
          <div className="text-center text-green-500 font-medium text-lg">
            Thank you for contacting me! I'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={onSubmitHandler}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <Input
                name="name"
                type="text"
                trueType="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={onChangeValue}
                inputCss="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <Input
                name="email"
                type="email"
                trueType="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={onChangeValue}
                inputCss="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              {inValid && (
                <p className="text-red-500 text-sm mt-1">Invalid Email</p>
              )}
            </div>

            <div className="mb-7">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <Input
                name="phone"
                type="tel"
                trueType="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={onChangeValue}
                inputCss="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className={`w-full bg-black text-white font-bold py-2 px-4 rounded hover:bg-primaryColor hover:text-black transition-all duration-300 ease-in-out ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? "Loading..." : "Submit"}{" "}
                {/* Display Loading text */}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactMeForm;
