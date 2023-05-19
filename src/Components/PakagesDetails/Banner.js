import React from "react";
import img from "../../../src/images/dubai_night_bg.jpg";
import {data } from "../../Data";

export default function Banner() {
  return (
    <section className="pakage_banner_section">
      <div className="banner_img">
        <img src={img} alt="banner" />
        <div className="container">
          <div className="banner_text">
            <div className="main_text">
              <div className="right_text">
                <h1>{data.right_text.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
