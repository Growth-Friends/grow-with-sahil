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
    <div
      style={{ height: scrollHeight * 3 }}
      ref={scrollContainer}
      className="md:px-[40px] px-[10px]"
    >
      <div className="sticky top-5 xl:py-14 lg:py-12 md:py-10 pt-8 pb-0 max-w-[80rem] mx-auto overflow-hidden  ">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold xl:text-6xl lg:text-5xl md:text-4xl text-3xl ">
            {content.heading}
          </h2>
          <img
            src={svgFilePrefix("/questionMan.svg")}
            alt="my experience illustration"
            className="aspect-auto xl:w-72 lg:w-64 md:w-56 w-36 "
          />
        </div>
        <div className="relative xl:mt-14 lg:mt-10 md:mt-8 mt-4 ">
          <div className="w-0 h-0 xl:border-[15px] md:border-[12px] border-[8px] rounded-full border-black absolute left-0 top-1/2 -translate-y-1/2 "></div>
          <ArrowForwardRoundedIcon className="text-black xl:text-8xl md:text-7xl text-5xl absolute right-0 translate-x-[20%] top-1/2 -translate-y-1/2" />
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
                          ? "order-none xl:border-b-8 md:border-b-[6px] border-b-[4px] xl:-mb-1 md:-mb-[3px] -mb-[1.8px] "
                          : "order-2 xl:border-t-8 md:border-t-[6px] border-t-[4px] xl:-mt-1 md:-mt-[3px] -mt-[1.8px] "
                      } border-black xl:py-12 md:py-10 py-8 `}
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
                        className={` border-2 border-black xl:px-4 px-3 lg:py-4 py-3 relative lg:w-[350px] md:w-[300px] w-full mx-auto `}
                      >
                        <p className="font-semibold xl:text-2xl lg:text-xl md:text-lg text-base ">
                          {item.head}
                        </p>
                        <p className="text-paraSecondary xl:text-lg lg:text-base md:text-sm text-xs mt-1">
                          {item.para}
                        </p>
                        {index % 2 == 0 ? (
                          <div className="absolute w-0 h-0 border-black xl:border-[24px] md:border-[20px] border-[16px] border-r-transparent border-b-transparent bottom-0 translate-y-full">
                            <div className="absolute w-0 h-0 border-white xl:border-[21px] md:border-[18px] border-[14px] border-r-transparent border-b-transparent top-0 -translate-y-[58%] left-1/2 -translate-x-[50%] "></div>
                          </div>
                        ) : (
                          <div className="absolute w-0 h-0 border-black xl:border-[24px] md:border-[20px] border-[16px] border-t-transparent border-r-transparent top-0 -translate-y-full">
                            <div className="absolute w-0 h-0 border-white xl:border-[21px] md:border-[18px] border-[14px] border-t-transparent border-r-transparent bottom-0 translate-y-[58%] left-1/2 -translate-x-[50%] "></div>
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
