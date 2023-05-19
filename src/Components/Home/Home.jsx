import React, { useEffect } from "react";
import "../Home/Home.css";
import video from "../../images/ocean.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsListNested } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import Aos from "aos";
import "aos/dist/aos.css";
import { data } from "../../Data";

const Home = () => {
  // Lets create a react hook to add a scroll animation....//

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop typeof="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            {data.smallText.title}
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            {data.homeTitle.title}
          </h1>
        </div>
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <lable htmlFor="city">{data.destinationInput.title}</lable>
            <div className="input flex">
              <input type="text" placeholder="Enter Name Here..." />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="dateInput">
            <lable htmlFor="date">{data.dateInput.title}:</lable>
            <div className="input flex">
              <input type="date" placeholder="Enter Name Here..." />
            </div>
          </div>
          <div className="princeInput">
            <div className="label_total flex">
              <lable htmlFor="price">{data.label_total.title}</lable>
              <h3 className="total">{data.total.title}</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>{data.searchOptions.title}</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
            <BsListNested className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
