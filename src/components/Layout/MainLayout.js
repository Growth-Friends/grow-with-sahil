import React from "react";

function MainLayout({ children, outerClass = "", innerClass = "" }) {
  return (
    <div className={`px-3 select-none overflow-hidden ${outerClass}`}>
      <div className={`max-w-[80rem] mx-auto ${innerClass} `}>{children}</div>
    </div>
  );
}

export default MainLayout;
