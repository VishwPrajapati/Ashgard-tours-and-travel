import React from "react";
import img from "../../images/honeymoon.jpg";
import { BsFillPersonFill } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdContacts } from "react-icons/md";
import { data } from "../../Data";

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
                <p>{data.about_us_text.title}</p>
                <h1>{data.about_us_text_content.title}</h1>
              </div>
              <div className="experience_text">
                <p>{data.experience_text.title}</p>
              </div>
              <div className="expert_text">
                <div className="all_icon">
                  <h1>
                    <BsFillPersonFill /> {data.all_icon_1.title}
                  </h1>
                  <h1>
                    <FaHandsHelping /> {data.all_icon_2.title}
                  </h1>
                  <h1>
                    <AiOutlineQuestionCircle /> {data.all_icon_3.title}
                  </h1>
                  <h1>
                    <MdContacts /> {data.all_icon_4.title}
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
