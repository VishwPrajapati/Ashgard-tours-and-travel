import React from "react";
import img1 from "../../../src/images/toursit_img_1.jpg";
import img2 from "../../../src/images/toursit_img_1.jpg";
import img3 from "../../../src/images/toursit_img_1.jpg";
import img4 from "../../../src/images/toursit_img_1.jpg";
import img5 from "../../../src/images/toursit_img_1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PhotosContent() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <>
      <section className="section_image_content">
        <div className="container">
          <div className="image_content_title">
            <h1>Image</h1>
            <p>Tours Journey Click</p>
          </div>
          <div className="journey_pic">
            <Slider {...settings}>
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
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
