import React from "react";
import img1 from "../../../src/images/photo-activity-1.jpg";
import img2 from "../../../src/images/photo-activity-2.jpg";
import img3 from "../../../src/images/photo-activity-3.jpg";
import img4 from "../../../src/images/photo-activity-4.jpg";
import img5 from "../../../src/images/photo-activity-5.jpg";
import img6 from "../../../src/images/photo-activity-6.jpg";
import img7 from "../../../src/images/photo-activity-7.jpg";
import { data } from "../../Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PhotosContent() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <>
      <section className="section_image_content">
        <div className="container">
          <div className="image_content_title">
            <h1>{data.image_content_title.title}</h1>
            <p>{data.image_content_para.title}</p>
          </div>
          <div className="journey_pic">
            <Slider className="photos_button" {...settings}>
              <div className="content_video">
                <div className="round-1 round" />
                <div className="round-2 round" />
                <div className="main_image">
                  <img src={img1} alt="image" />
                </div>
              </div>
              <div className="content_video">
                <div className="round-1 round" />
                <div className="round-2 round" />
                <div className="main_image">
                  <img src={img2} alt="image" />
                </div>
              </div>
              <div className="content_video">
                <div className="round-1 round" />
                <div className="round-2 round" />
                <div className="main_image">
                  <img src={img3} alt="image" />
                </div>
              </div>
              <div className="content_video">
                <div className="round-1 round" />
                <div className="round-2 round" />
                <div className="main_image">
                  <img src={img4} alt="image" />
                </div>
              </div>
              <div className="content_video">
                <div className="round-1 round" />
                <div className="round-2 round" />
                <div className="main_image">
                  <img src={img5} alt="image" />
                </div>
              </div>
              <div className="content_video">
                <div className="round-1 round" />
                <div className="round-2 round" />
                <div className="main_image">
                  <img src={img6} alt="image" />
                </div>
              </div>
              <div className="content_video">
                <div className="round-1 round" />
                <div className="round-2 round" />
                <div className="main_image">
                  <img src={img7} alt="image" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
