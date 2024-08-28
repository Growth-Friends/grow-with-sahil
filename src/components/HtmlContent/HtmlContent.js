import React from "react";
import MainLayout from "../Layout/MainLayout";
import "./HtmlContent.css";

function HtmlContent({ data }) {
  // Assuming 'content' contains the HTML string to be rendered
  const htmlContent = data?.content?.rendered;
  return (
    <MainLayout>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="detailPageCss"
      />
    </MainLayout>
  );
}

export default HtmlContent;
