import React from "react";
import MainLayout from "../Layout/MainLayout";
import { getComponentText } from "@/utils/functions/functions";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function SearchBar({ tools, resources }) {
  const content = getComponentText(
    `util.searchBar.${tools ? "tools" : resources && "resources"}`
  );
  return (
    <MainLayout innerClass={"pt-8"}>
      <div className="relative">
        <input
          className="w-full text-xl border-bgBlackPara/40 border-2 py-2 pl-14 pr-3 rounded-lg focus:outline-none peer "
          placeholder={content.placeholder}
        />
        <SearchRoundedIcon className="text-3xl text-bgBlackPara peer-focus:text-black absolute top-1/2 -translate-y-1/2 left-4 " />
      </div>
    </MainLayout>
  );
}

export default SearchBar;
