import React from "react";
import img from "../../../src/images/contact-us-banner-02.jpg";

export default function ContactUsBanner() {
  return (
    <>
      <section className="contact_us_banner">
        <div className="contact_banner_img">
          <img src={img} alt="banner" />
          <div className="container">
            <div className="contact_us_banner_text">
              <div className="contact_us_main_title">
                <div className="contact_us_title">
                  <h1>Contact Us</h1>
                  <p>Life is either a daring adventure or nothing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
