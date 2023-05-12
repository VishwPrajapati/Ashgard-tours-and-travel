import React from "react";
import img from "../../../src/images/about-us-banner-image-02.jpg";

export default function BannerAboutUs() {
  return (
    <>
      <section className="banner_image_about_us">
        <div className="about_banner_image">
          <img src={img} alt="banner" />
          <div className="container">
            <div className="about_us_banner_text">
              <div className="about_us_title">
                <h1>About Us </h1>
                <p>Who we are & where do we stand</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
