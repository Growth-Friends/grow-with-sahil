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
  retentionToolsRef,
  seoToolsRef,
  socialToolsRef,
} from "../ToolsComponent/ToolsWrapper/ToolsWrapper";
import { footerRef } from "../Footer/Footer";
import { moreResourcesRef } from "../ResourcesComponent/MoreResources/MoreResources";
import { emailPromotionRef } from "../DetailSection/Promotions/EmailPromotion";
import MenuIcon from "@mui/icons-material/Menu";
import { Dialog, Slide } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function Navbar() {
  const content = getComponentText("util.navbar");
  const [scrollPosition, setScrollPosition] = useState();
  const [bgBlack, setBgBlack] = useState(true);
  const [dialogBoxOpen, setDialogBoxOpen] = useState(false);

  //open dialog box
  function openDialogBox() {
    setDialogBoxOpen(true);
  }

  //close dialog box
  function closeDialogBox() {
    setDialogBoxOpen(false);
  }

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
    const retentionToolsRect =
      retentionToolsRef?.current?.getBoundingClientRect();
    if (
      (heroSectionRect?.top < 1 && heroSectionRect?.bottom > 0) ||
      (marketingToolRect?.top < 1 && marketingToolRect?.bottom > 0) ||
      (subHeroSectionRect?.top < 1 && subHeroSectionRect?.bottom > 0) ||
      (seoToolsRect?.top < 1 && seoToolsRect?.bottom > 0) ||
      (socialToolsRect?.top < 1 && socialToolsRect?.bottom > 0) ||
      (performanceToolsRect?.top < 1 && performanceToolsRect?.bottom > 0) ||
      (footerRect?.top < 1 && footerRect?.bottom > 0) ||
      (moreResourcesRect?.top < 1 && moreResourcesRect?.bottom > 0) ||
      (emailPromotionRect?.top < 1 && emailPromotionRect?.bottom > 0) ||
      (retentionToolsRect?.top < 1 && retentionToolsRect?.bottom > 0)
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
        scrollPosition > 0
          ? " border-b-[1px] xl:py-4 lg:py-3 md:py-2 py-2 "
          : " border-b-0 xl:py-8 lg:py-6 md:py-5 py-2 "
      } `}
    >
      <nav className="flex justify-between items-center">
        <Link
          prefetch={false}
          href={staticRoutes["home"]}
          className="font-semibold xl:text-3xl lg:text-2xl md:text-xl text-2xl "
        >
          {content.brandName}
        </Link>
        <ul className="md:flex hidden xl:gap-x-8 lg:gap-x-7 gap-x-6 xl:text-lg lg:text-base text-sm ">
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
        <div className="md:hidden flex items-center p-2">
          <MenuIcon className="text-3xl" onClick={openDialogBox} />
        </div>
        <Dialog
          fullScreen
          open={dialogBoxOpen}
          TransitionComponent={Transition}
        >
          <div className="px-[10px]">
            <div className="py-2 flex items-center justify-between text-black">
              <Link
                prefetch={false}
                href={staticRoutes["home"]}
                onClick={closeDialogBox}
                className="font-semibold text-2xl "
              >
                {content.brandName}
              </Link>
              <div className="flex items-center p-2">
                <CloseIcon className="text-3xl" onClick={closeDialogBox} />
              </div>
            </div>
            <div className="mt-5">
              <ul className="flex flex-col gap-y-5 text-xl font-medium ">
                {content.navList.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        prefetch={false}
                        href={staticRoutes[`${item.link}`]}
                        onClick={closeDialogBox}
                        className="block"
                      >
                        {item.para}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Dialog>
      </nav>
    </MainLayout>
  );
}

export default Navbar;
