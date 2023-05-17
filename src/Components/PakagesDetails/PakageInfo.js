import React from "react";
import Banner from "./Banner";
import "../../Components/PakagesDetails/pakageinfo.css";
import BookingInfo from "./BookingInfo";
import VideoContent from "./VideoContent";
import DetailsTour from "./DetailsTour";
import PhotosContent from "./PhotosContent";
import AllCondition from "./AllCondition";

export default function PakageInfo() {
  window.scrollTo(0, 0);
  return (
    <>
      <Banner />
      <BookingInfo />
      <DetailsTour />
      <VideoContent />
      <PhotosContent />
      <AllCondition />
    </>
  );
}
