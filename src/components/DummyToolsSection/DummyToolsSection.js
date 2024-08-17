import React from "react";
import MainLayout from "../Layout/MainLayout";

function DummyToolsSection() {
  return (
    <MainLayout>
      <div className="h-96 bg-slate-300 rounded-lg flex items-center justify-center my-8">
        <p className="font-bold text-6xl text-paraSecondary">Your Tool</p>
      </div>
    </MainLayout>
  );
}

export default DummyToolsSection;
