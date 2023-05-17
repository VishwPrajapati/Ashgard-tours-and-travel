import React from "react";
import img from "../../images/Dubai.jpg";
import img2 from "../../images/singapore.jpg";
import img3 from "../../images/Twin-tower.jpg";
import "aos/dist/aos.css";
import "../../Components/Subnavbar/package.css"
import Home from "../Home/Home";
import PackagesDetails from "./PackagesDetails";

const title = {
  title: "International Destination ",
};

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Dubai Holidays",
    location: "Dubai",
    grade: "CULTURAL RELAX",
    fees: "$480",
    description:
      "The epitome of romance , Bora Bora is one of the best travel destination in the world",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "SINGAPORE",
    location: "SINGAPORE",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance , Bora Bora is one of the best travel destination in the world",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "MALAYSIA",
    location: "MALAYSIA",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance , Bora Bora is one of the best travel destination in the world",
  },
];

export default function InternationalTour() {
  window.scrollTo(0, 0);
  return (
    <>
      <Home />
      <PackagesDetails packagesDetails={Data} title={title} />
    </>
  );
}
