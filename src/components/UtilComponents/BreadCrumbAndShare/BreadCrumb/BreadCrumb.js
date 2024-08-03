"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

function BreadCrumb() {
  const pathName = usePathname();
  const pathsArray = pathName.split("/");
  return (
    <div>
      <ul className="flex">
        <li>
          <Link href={"/"}>
            <HomeRoundedIcon />
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
                    <Link href={currentPath}>{item.replaceAll("-", " ")}</Link>
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
