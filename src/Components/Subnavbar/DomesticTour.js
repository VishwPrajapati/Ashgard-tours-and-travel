import img1 from "../../images/goa.jpg";
import img2 from "../../images/ladak.jpg";
import img3 from "../../images/kashmir.jpg";
import "aos/dist/aos.css";
import Home from "../Home/Home";
import PackagesDetails from "../Subnavbar/PackagesDetails";

const title = {
  title: "Domestic Destination ",
};

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Goa",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance , Bora Bora is one of the best travel destination in the world",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Leh-Ladak",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance , Bora Bora is one of the best travel destination in the world",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Kashmir",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance , Bora Bora is one of the best travel destination in the world",
  },
];

export default function DomesticTour() {
  window.scrollTo(0, 0);
  return (
    <>
      <Home />
      <PackagesDetails packagesDetails={Data} title={title} />
    </>
  );
}
