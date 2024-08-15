"use client";
import { getComponentText, svgFilePrefix } from "@/utils/functions/functions";
import React, { useEffect, useRef, useState } from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { motion, useScroll, useTransform } from "framer-motion";

function ExperienceSection() {
  const content = getComponentText("about.experienceSection");
  const scrollContainer = useRef();
  const scrollActualContainer = useRef();
  const [scrollHeight, setScrollHeight] = useState(0);
  const { scrollYProgress } = useScroll({ target: scrollContainer });

  const translateX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  useEffect(() => {
    if (scrollActualContainer.current) {
      setScrollHeight(scrollActualContainer.current.clientWidth);
    }
  }, []);

  return (
    <div style={{ height: scrollHeight * 3 }} ref={scrollContainer}>
      <div className="sticky top-5 py-14 max-w-[80rem] mx-auto ">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-6xl">{content.heading}</h2>
          <img
            src={svgFilePrefix("/questionMan.svg")}
            alt="my experience illustration"
            className="aspect-auto w-72"
          />
        </div>
        <div className="relative mt-14">
          <div className="w-0 h-0 border-[15px] rounded-full border-black absolute left-0 -translate-x-full top-1/2 -translate-y-1/2 "></div>
          <ArrowForwardRoundedIcon className="text-black text-8xl absolute right-0 translate-x-[50%] top-1/2 -translate-y-1/2" />
          <div className=" overflow-hidden">
            <motion.div
              style={{ x: translateX }}
              className="flex"
              ref={scrollActualContainer}
            >
              {content.experienceSectionList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`w-[calc(100%/2)] flex-shrink-0 grid grid-flow-row grid-rows-2`}
                  >
                    <div
                      className={`${
                        index % 2 === 0
                          ? "order-none border-b-8 -mb-1 "
                          : "order-2 border-t-8 -mt-1 "
                      } border-black py-12 `}
                    >
                      <motion.div
                        variants={{
                          initial: () => {
                            return {
                              opacity: 0,
                              scale: "80%",
                              y: index % 2 === 0 ? 30 : -30,
                            };
                          },
                          animate: {
                            opacity: 1,
                            scale: "100%",
                            y: 0,
                            transition: {
                              duration: 0.8,
                              delay: 0.5,
                              type: "spring",
                            },
                          },
                        }}
                        initial="initial"
                        whileInView="animate"
                        // viewport={{ once: true }}
                        custom={index}
                        className={`border-2 border-black px-4 pt-4 pb-5 relative w-[350px] mx-auto `}
                      >
                        <p className="font-semibold text-2xl">{item.head}</p>
                        <p className="text-paraSecondary text-lg mt-1">
                          {item.para}
                        </p>
                        {index % 2 == 0 ? (
                          <div className="absolute w-0 h-0 border-black border-[24px] border-r-transparent border-b-transparent bottom-0 translate-y-full">
                            <div className="absolute w-0 h-0 border-white border-[21px] border-r-transparent border-b-transparent top-0 -translate-y-[58%] left-1/2 -translate-x-[50%] "></div>
                          </div>
                        ) : (
                          <div className="absolute w-0 h-0 border-black border-[24px] border-t-transparent border-r-transparent top-0 -translate-y-full">
                            <div className="absolute w-0 h-0 border-white border-[21px] border-t-transparent border-r-transparent bottom-0 translate-y-[58%] left-1/2 -translate-x-[50%] "></div>
                          </div>
                        )}
                      </motion.div>
                    </div>

                    <div></div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
