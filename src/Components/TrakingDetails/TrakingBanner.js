import React from "react";
import img from "../../images/trekking-banner.jpg";

export default function TrakingBanner() {
  
  return (
    <>
      <section className="traking_hero_banner">
        <div className="traking_banner">
          <img src={img} alt="Image" />
          <div className="container">
            <div className="traking_banner_text">
              <h1>Everest Traking</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
