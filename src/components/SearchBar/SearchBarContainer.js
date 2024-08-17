"use client";
import React from "react";
import SearchBar from "./SearchBar";

function SearchBarContainer({ tools, resources }) {
  return (
    <>
      <SearchBar tools={tools} resources={resources} />
    </>
  );
}

export default SearchBarContainer;
