import React from "react";
import img1 from "../../../src/images/toursit_img_1.jpg";
import img2 from "../../../src/images/toursit_img_1.jpg";
import img3 from "../../../src/images/toursit_img_1.jpg";
import img4 from "../../../src/images/toursit_img_1.jpg";
import img5 from "../../../src/images/toursit_img_1.jpg";

export default function PhotosContent() {
  return (
    <>
      <section className="section_image_content">
        <div className="container">
          <div className="image_content_title">
            <h1>Image</h1>
            <p>Tours Journey Click</p>
          </div>
          <div className="journey_pic">
            <div className="content_video">
              <div className="main_image">
                <img src={img1} alt="image" />
              </div>
            </div>
            <div className="content_video">
              <div className="main_image">
                <img src={img2} alt="image" />
              </div>
            </div>
            <div className="content_video">
              <div className="main_image">
                <img src={img3} alt="image" />
              </div>
            </div>
            <div className="content_video">
              <div className="main_image">
                <img src={img4} alt="image" />
              </div>
            </div>
            <div className="content_video">
              <div className="main_image">
                <img src={img5} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
