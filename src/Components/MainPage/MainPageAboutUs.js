import React from "react";
import img from "../../images/honeymoon.jpg";
import { BsFillPersonFill } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdContacts } from "react-icons/md";

export default function MainPageAboutUs() {
  return (
    <>
      <section className="main_about_us_section">
        <div className="container">
          <div className="main_about_us">
            <div className="left_about_us">
              <div className="left_image">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="right_about_us">
              <div className="about_us_text">
                <p>Why Choose Us</p>
                <h1>Ashgard India Tour And Travels</h1>
              </div>
              <div className="experience_text">
                <p>
                  Ashgard India Tour And Travels in Sco.18 sec 125,Near eco
                  floors & western Homes, Jhugian Road, Sunny Enclave, Kharar,
                  SAS Nagar organise Many Tour to Delhi ,Chandigarh ,Shimla,
                  Kullu Manali, Golden Temple, Dubai, Bali, Singapore and
                  Leh-Ladak Tour and other destination. as wll as We arrange
                  Honeymoon package, River Rafting, Family package Trekking
                  Adventure Tour also for group packages, please contact us for
                  any type of facilities regarding package tours.
                </p>
              </div>
              <div className="expert_text">
                <div className="all_icon">
                  <h1>
                    <BsFillPersonFill /> Expert Tour Guide
                  </h1>
                  <h1>
                    <FaHandsHelping /> Total experience
                  </h1>
                  <h1>
                    <AiOutlineQuestionCircle /> Beautiful Tour Place
                  </h1>
                  <h1>
                    <MdContacts /> Smooth booking
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
