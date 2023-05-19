import React from "react";
import img from "../../images/rajesthan-slider.jpg";
import { data } from "../../Data";

export default function MainPageBanner() {
  return (
    <>
      <section className="main_hero-banner">
        <div className="banner_pic">
          <img src={img} alt="Banner" />
        </div>
        <div className="container">
          <div className="main_banner_text">
            <div className="text_banner_image">
              <h1>{data.main_banner_text.title}</h1>
              <h2>{data.main_banner_text_para.title}</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
