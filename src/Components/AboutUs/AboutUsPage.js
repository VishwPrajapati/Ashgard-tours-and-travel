import React from "react";
import AboutUsTop from "./AboutUsTop";
import BannerAboutUs from "./BannerAboutUs";
import TravelWithUs from "./TravelWithUs";

export default function AboutUsPage() {
  window.scrollTo(0, 0);
  return (
    <>
      <BannerAboutUs />
      <AboutUsTop />
      <TravelWithUs />
    </>
  );
}
