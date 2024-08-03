"use client";
import React, { useEffect, useState } from "react";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import { AnimatePresence, motion } from "framer-motion";
import {
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

function ShareWebsite() {
  const [currentPath, setCurrentPath] = useState();
  const [isHovered, setHovered] = useState(false);

  //onClick
  function isHoveredOpen() {
    setHovered(true);
  }

  function isHoveredClose(e) {
    const shareButtonClicked = Array.from(e.target.classList).includes(
      "share-social-button"
    );
    if (!shareButtonClicked && isHovered) {
      setHovered(false);
    }
  }

  useEffect(() => {
    setCurrentPath(window.location);
    window.addEventListener("click", isHoveredClose);
    return () => {
      window.removeEventListener("click", isHoveredClose);
    };
  }, [isHovered]);

  return (
    <div className="relative" onClick={isHoveredOpen}>
      <ShareRoundedIcon
        className="share-social-button cursor-pointer"
        onClick={isHoveredOpen}
      />
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 30, opacity: 0 }}
            transition={{ type: "spring", duration: 1 }}
            className=" absolute right-0 -bottom-10 flex items-center gap-x-2.5 "
          >
            <WhatsappShareButton
              url={currentPath}
              className="flex items-center"
            >
              <WhatsappIcon className="rounded-md w-6 h-min " />
            </WhatsappShareButton>
            <TwitterShareButton url={currentPath} className="flex items-center">
              <TwitterIcon className="rounded w-6 h-min " />
            </TwitterShareButton>
            <FacebookShareButton
              url={currentPath}
              className="flex items-center"
            >
              <FacebookIcon className="rounded w-6 h-min " />
            </FacebookShareButton>
            <LinkedinShareButton
              url={currentPath}
              className="flex items-center"
            >
              <LinkedinIcon className="rounded w-6 h-min " />
            </LinkedinShareButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ShareWebsite;
