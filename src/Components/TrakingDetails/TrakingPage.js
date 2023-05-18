import React from "react";
import TrakingBanner from "./TrakingBanner";
import "../../Components/TrakingDetails/TrakingDetails.css";
import TrakingRate from "./TrakingRate";
import TrakingDuration from "./TrakingDuration";

export default function TrakingPage() {
  window.scrollTo(0, 0);
  return (
    <>
      <TrakingBanner />
      <TrakingRate />
      <TrakingDuration />
    </>
  );
}
