import React from "react";
import img1 from "../../images/bali.jpg";
import img2 from "../../images/ladak.jpg";
import img3 from "../../images/Jaisalmer.jpg";
import "aos/dist/aos.css";
import Home from "../Home/Home";
import PackagesDetails from "./PackagesDetails";

const title = {
  title: "Honeymoon Destination",
};

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Bali",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance , Bora Bora is one of the best travel destination in the world",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Manali",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance , Bora Bora is one of the best travel destination in the world",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Jesalmer",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance , Bora Bora is one of the best travel destination in the world",
  },
];

export default function HoneyMoonTour() {
  window.scrollTo(0, 0);
  return (
    <>
      <Home />
      <PackagesDetails packagesDetails={Data} title={title} />
    </>
  );
}
