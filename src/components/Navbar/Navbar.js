"use client";
import React, { useEffect, useState } from "react";
import MainLayout from "../Layout/MainLayout";
import { getComponentText } from "@/utils/functions/functions";
import Link from "next/link";
import staticRoutes from "@/utils/routes/staticRoutes";
import { heroSectionRef } from "../HeroSection/HeroSection";
import { marketingToolRef } from "../MarketingToolSection/MarketingToolSection";

function Navbar() {
  const content = getComponentText("util.navbar");
  const [scrollPosition, setScrollPosition] = useState();
  const [bgBlack, setBgBlack] = useState(true);

  //scroll function
  function scrollFunction() {
    setScrollPosition(window.scrollY);
    const heroSectionRect = heroSectionRef.current.getBoundingClientRect();
    const marketingToolRect = marketingToolRef.current.getBoundingClientRect();
    if (
      (heroSectionRect.top < 1 && heroSectionRect.bottom > 0) ||
      (marketingToolRect.top < 1 && marketingToolRect.bottom > 0)
    ) {
      setBgBlack(true);
    } else {
      setBgBlack(false);
    }
  }

  //useEffect for scroll
  useEffect(() => {
    scrollFunction();
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <MainLayout
      outerClass={`fixed top-0 left-0 w-full ${
        bgBlack ? "text-white border-white/30" : "text-black border-black/20"
      } z-20 transition-all duration-300 ease-in-out backdrop-blur-lg  ${
        scrollPosition > 0 ? " border-b-[1px] py-4 " : " border-b-0 py-8 "
      } `}>
      <nav className="flex justify-between items-center">
        <Link
          href={staticRoutes["home"]}
          className="font-semibold text-3xl ">
          {content.brandName}
        </Link>
        <ul className="flex gap-x-8 text-lg ">
          {content.navList.map((item, index) => {
            return (
              <li key={index}>
                <Link href={staticRoutes[`${item.link}`]}>{item.para}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </MainLayout>
  );
}

export default Navbar;
