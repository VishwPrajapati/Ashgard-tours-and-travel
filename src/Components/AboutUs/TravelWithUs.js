import React from "react";
import img1 from "../../../src/images/about_second.jpg";
import img2 from "../../../src/images/about_third.jpg";

export default function TravelWithUs() {
  return (
    <section className="main_about_us_card">
      <div className="container">
        {/* <div className="about_us_pic_title">
          <h1>About US</h1>
        </div> */}
        <div className="pic_div">
          <img src={img1} alt="img" />
        </div>
        <div className="upper_img">
          <img src={img2} alt="img" />
        </div>
        <div className="card_about_us">
          <div className="main_about_us_card">
            <div className="card_content_about_us">
              <h1>About Us</h1>
              <p>
                Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet
                purus quis elementum. Phasellus sed efficitur dolor, et
                ultricies sapien. 
              </p>
              <p>
                Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet
                purus quis elementum. Phasellus sed efficitur dolor, et
                ultricies sapien. 
              </p>
              <div className="button_about_us">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
