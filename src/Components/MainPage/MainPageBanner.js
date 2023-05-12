import React from "react";
import img from "../../images/rajesthan-slider.jpg";

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
                    <h1>Welcome to</h1>
                    <h2>Ashgard India Tours and Travel</h2>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
