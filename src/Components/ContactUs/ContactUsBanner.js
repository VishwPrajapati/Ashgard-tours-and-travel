import React from "react";
import img from "../../../src/images/contact-us-banner-02.jpg";
import { data } from "../../Data";

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
                  <h1>{data.contact_us_title.title}</h1>
                  <p>{data.contact_us_para.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
