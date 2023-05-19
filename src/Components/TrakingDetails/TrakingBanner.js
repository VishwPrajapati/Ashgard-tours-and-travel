import React from "react";
import img from "../../images/trekking-banner.jpg";
import { data } from "../../Data";

export default function TrakingBanner() {
  return (
    <>
      <section className="traking_hero_banner">
        <div className="traking_banner">
          <img src={img} alt="Image" />
          <div className="container">
            <div className="traking_banner_text">
              <h1>{data.traking_banner_text.title}</h1>
            </div>
            <div className="traking_banner_para">
              <p>{data.traking_banner_para.title}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
