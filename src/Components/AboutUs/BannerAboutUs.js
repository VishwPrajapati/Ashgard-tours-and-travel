import React from "react";
import img from "../../../src/images/about-us-banner-image-02.jpg";
import { data } from "../../Data";

export default function BannerAboutUs() {
  return (
    <>
      <section className="banner_image_about_us">
        <div className="about_banner_image">
          <img src={img} alt="banner" />
          <div className="container">
            <div className="about_us_banner_text">
              <div className="about_us_title">
                <h1>{data.About_us_banner_title.title} </h1>
                <p> {data.About_us_banner_Para.title} </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
