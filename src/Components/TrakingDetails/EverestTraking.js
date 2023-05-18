import React from "react";
import TrakingBanner from "./TrakingBanner";
import "../../Components/TrakingDetails/TrakingDetails.css";
import TrakingRate from "./TrakingRate";
import TrakingDuration from "./TrakingDuration";
import TrakingDays from "./Trakingdays";
import TrakingBook from "./TrakingBook";

export default function EverestTraking() {
  window.scrollTo(0, 0);
  return (
    <>
      <TrakingBanner />
      <TrakingRate />
      <TrakingDuration />
      <TrakingDays />
      <TrakingBook />
    </>
  );
}
