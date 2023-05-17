import React from "react";
import img1 from "../../images/jaipur_weddings.jpg";
import img2 from "../../images/udaipur_wedding.jpg";
import img3 from "../../images/andaman_nicobar.jpg";
import "aos/dist/aos.css";
import Home from "../Home/Home";
import PackagesDetails from "./PackagesDetails";

const title = {
  title: "Wedding Destination",
};
const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Jaipur",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance , Bora Bora is one of the best travel destination in the world",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Udaipur",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance , Bora Bora is one of the best travel destination in the world",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Andaman Nicobar",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance , Bora Bora is one of the best travel destination in the world",
  },
];

export default function WeddingTour() {
  window.scrollTo(0, 0);
  return (
    <>
      <Home />
      <PackagesDetails packagesDetails={Data} title={title} />
    </>
  );
}
