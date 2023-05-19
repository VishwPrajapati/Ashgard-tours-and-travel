import React from "react";
import "../../../src/Components/AboutUs/AboutUsPage.css";
import { data } from "../../Data";

export default function AboutUsTop() {
  return (
    <>
      <section className="section_aboout_us">
        <div className="container">
          <div className="about_us_main">
            <div className="main_about_us_content">
              <div className="about_us_content">
                <h1>{data.about_us_content.title}</h1>
                <p>{data.about_us_content_para.title}</p>
              </div>
              <div className="about_us_content">
                <h1>{data.about_us_content_2.title}</h1>
                <p>{data.about_us_content_para_2.title}</p>
              </div>
              <div className="about_us_content">
                <h1>{data.about_us_content_3.title}</h1>
                <p>{data.about_us_content_para_3.title}</p>
                <p>{data.about_us_content_para_4.title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
