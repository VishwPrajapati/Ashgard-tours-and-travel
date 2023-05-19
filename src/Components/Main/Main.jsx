import React, { useEffect } from "react";
import "../../Components/Main/Main.css";
import img from "../../images/Dubai.jpg";
import img2 from "../../images/singapore.jpg";
import img3 from "../../images/malaysia.jpg";
import img4 from "../../images/bangkok.jpg";
import img5 from "../../images/bali.jpg";
import img6 from "../../images/bora.jpg";
import img7 from "../../images/goa.jpg";
import img8 from "../../images/ladak.jpg";
import img9 from "../../images/kashmir.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { data } from "../../Data";
// here the data of our websites

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
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Bangkok",
    location: "THAILAND",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance , Bora Bora is one of the best travel destination in the world",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Bali",
    location: "indonesia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance , Bora Bora is one of the best travel destination in the world",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Bora Bora",
    location: "new zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance , Bora Bora is one of the best travel destination in the world",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Goa",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance , Bora Bora is one of the best travel destination in the world",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Leh-Ladak",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance , Bora Bora is one of the best travel destination in the world",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Kashmir",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance , Bora Bora is one of the best travel destination in the world",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const navigate = useNavigate();

  // const handleChange = () => {
  //   navigate("/pakageinfo")
  // }
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-up" className="title">
          {data.main_section_title.title}
        </h3>
      </div>

      <div className="secContent">
        {Data.map((data) => {
          return (
            <div key={data.id} data-aos="fade-up" className="singleDestination">
              <div className="imageDiv">
                <img src={data.imgSrc} alt={data.destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{data.destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{data.location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>{data.grade}</span>
                  </div>
                  <div className="price">
                    <h5>{data.fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{data.description}</p>
                </div>

                <div className="button_booking">
                  <button
                    className="button_card flex"
                    onClick={() => {
                      navigate("/pakageinfo");
                    }}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
