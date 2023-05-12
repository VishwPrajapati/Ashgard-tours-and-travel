import React from "react";
import MainPageBanner from "./MainPageBanner";
import "../../../src/Components/MainPage/mainpage.css";
import MainPageAboutUs from "./MainPageAboutUs";
import SpecialPage from "./SpecialPage";
import ActivityPage from "./ActivityPage";

export default function Index() {
  return (
    <>
      <MainPageBanner />
      <MainPageAboutUs />
      <SpecialPage />
      <ActivityPage />
    </>
  );
}
