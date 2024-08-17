"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import staticRoutes from "@/utils/routes/staticRoutes";

function BreadCrumb() {
  const pathName = usePathname();
  const pathsArray = pathName.split("/");
  return (
    <div>
      <ul className="flex items-center lg:text-base text-sm whitespace-nowrap flex-wrap gap-y-2">
        <li>
          <Link href={staticRoutes.home} prefetch={false}>
            <HomeRoundedIcon className="md:text-2xl text-xl " />
          </Link>
        </li>
        {pathsArray.map((item, index, array) => {
          const newPathArray = JSON.parse(JSON.stringify(array));
          const currentPath = newPathArray.slice(0, index + 1).join("/");
          return (
            <React.Fragment key={index}>
              {item !== "" && (
                <>
                  <KeyboardArrowRightRoundedIcon />
                  <li className="capitalize flex items-end">
                    <Link prefetch={false} href={currentPath}>
                      {item.replaceAll("-", " ")}
                    </Link>
                  </li>
                </>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}

export default BreadCrumb;
