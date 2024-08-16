"use client";
import React, { useEffect, useState } from "react";
import MainLayout from "../Layout/MainLayout";
import { getComponentText } from "@/utils/functions/functions";
import Link from "next/link";
import staticRoutes from "@/utils/routes/staticRoutes";
import { heroSectionRef } from "../HeroSection/HeroSection";
import { marketingToolRef } from "../MarketingToolSection/MarketingToolSection";
import { subHeroSectionRef } from "../SubHeroSection/SubHeroSection";
import {
  performanceToolsRef,
  seoToolsRef,
  socialToolsRef,
} from "../ToolsComponent/ToolsWrapper/ToolsWrapper";
import { footerRef } from "../Footer/Footer";
import { moreResourcesRef } from "../ResourcesComponent/MoreResources/MoreResources";
import { emailPromotionRef } from "../DetailSection/Promotions/EmailPromotion";

function Navbar() {
  const content = getComponentText("util.navbar");
  const [scrollPosition, setScrollPosition] = useState();
  const [bgBlack, setBgBlack] = useState(true);

  //scroll function
  function scrollFunction() {
    setScrollPosition(window.scrollY);
    const heroSectionRect = heroSectionRef?.current?.getBoundingClientRect();
    const marketingToolRect =
      marketingToolRef?.current?.getBoundingClientRect();
    const subHeroSectionRect =
      subHeroSectionRef?.current?.getBoundingClientRect();
    const seoToolsRect = seoToolsRef?.current?.getBoundingClientRect();
    const socialToolsRect = socialToolsRef?.current?.getBoundingClientRect();
    const performanceToolsRect =
      performanceToolsRef?.current?.getBoundingClientRect();
    const footerRect = footerRef?.current?.getBoundingClientRect();
    const moreResourcesRect =
      moreResourcesRef?.current?.getBoundingClientRect();
    const emailPromotionRect =
      emailPromotionRef?.current?.getBoundingClientRect();
    if (
      (heroSectionRect?.top < 1 && heroSectionRect?.bottom > 0) ||
      (marketingToolRect?.top < 1 && marketingToolRect?.bottom > 0) ||
      (subHeroSectionRect?.top < 1 && subHeroSectionRect?.bottom > 0) ||
      (seoToolsRect?.top < 1 && seoToolsRect?.bottom > 0) ||
      (socialToolsRect?.top < 1 && socialToolsRect?.bottom > 0) ||
      (performanceToolsRect?.top < 1 && performanceToolsRect?.bottom > 0) ||
      (footerRect?.top < 1 && footerRect?.bottom > 0) ||
      (moreResourcesRect?.top < 1 && moreResourcesRect?.bottom > 0) ||
      (emailPromotionRect?.top < 1 && emailPromotionRect?.bottom > 0)
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
      } `}
    >
      <nav className="flex justify-between items-center">
        <Link
          prefetch={false}
          href={staticRoutes["home"]}
          className="font-semibold text-3xl "
        >
          {content.brandName}
        </Link>
        <ul className="flex gap-x-8 text-lg ">
          {content.navList.map((item, index) => {
            return (
              <li key={index}>
                <Link prefetch={false} href={staticRoutes[`${item.link}`]}>
                  {item.para}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </MainLayout>
  );
}

export default Navbar;
