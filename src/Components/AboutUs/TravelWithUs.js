import React from "react";
import img1 from "../../../src/images/about_second.jpg";
import img2 from "../../../src/images/about_third.jpg";
import { data } from "../../Data";

export default function TravelWithUs() {
  return (
    <section className="main_about_us_card">
      <div className="container">
        <div className="pic_div">
          <img src={img1} alt="img" />
        </div>
        <div className="upper_img">
          <img src={img2} alt="img" />
        </div>
        <div className="card_about_us">
          <div className="main_about_us_card">
            <div className="card_content_about_us">
              <h1>{data.card_content_about_us_title.title}</h1>
              <p>{data.card_content_about_us_title_para_1.title}</p>
              <p>{data.card_content_about_us_title_para_2.title}</p>
              <div className="button_about_us">
                <button>{data.button_about_us.title}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
