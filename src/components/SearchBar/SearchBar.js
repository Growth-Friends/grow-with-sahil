import React from "react";
import MainLayout from "../Layout/MainLayout";
import { getComponentText } from "@/utils/functions/functions";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function SearchBar({ tools, resources }) {
  const content = getComponentText(
    `util.searchBar.${tools ? "tools" : resources && "resources"}`
  );
  return (
    <MainLayout innerClass={"xl:pt-10 lg:pt-8 md:pt-6 pt-5 "}>
      <div className="relative">
        <input
          className="w-full xl:text-xl lg:text-lg md:text-base text-sm border-paraSecondary/40 border-2 py-2 xl:pl-14 md:pl-12 pl-10 pr-3 rounded-lg focus:outline-none peer "
          placeholder={content.placeholder}
        />
        <SearchRoundedIcon className="xl:text-3xl text-2xl text-paraSecondary peer-focus:text-black absolute top-1/2 -translate-y-1/2 md:left-4 left-3 " />
      </div>
    </MainLayout>
  );
}

export default SearchBar;
