import React, { forwardRef } from "react";

const MainLayout = forwardRef(
  ({ children, outerClass = "", innerClass = "" }, ref) => {
    return (
      <div
        ref={ref}
        className={`px-3 select-none overflow-hidden ${outerClass}`}>
        <div className={`max-w-[80rem] mx-auto ${innerClass} `}>{children}</div>
      </div>
    );
  }
);

export default MainLayout;
