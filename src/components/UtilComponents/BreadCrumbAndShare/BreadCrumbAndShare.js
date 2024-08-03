import React from "react";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import ShareWebsite from "./ShareWebsite/ShareWebsite";

function BreadCrumbAndShare() {
  return (
    <div className="flex items-center justify-between">
      <BreadCrumb />
      <ShareWebsite />
    </div>
  );
}

export default BreadCrumbAndShare;
