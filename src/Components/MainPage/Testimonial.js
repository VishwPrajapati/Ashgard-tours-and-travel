import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <>
      <section className="testimonial-area">
        <div className="container">
          <div className="sec-title white-title">
            <h2>Testimonials</h2>
            <p>What Client Say About Us?</p>
          </div>
          <div className="testimonial-content owl-carousel">
            <Slider {...settings}>
              <div className="single-testimonial">
                <div className="round-1 round" />
                <div className="round-2 round" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <div className="client-info">
                  <div className="client-video">
                    <a href="#">
                      <img
                        src="https://i.ibb.co/DWhSr6S/play-button2.png"
                        alt
                      />
                    </a>
                  </div>
                  <div className="client-details">
                    <h6>Yeasin Arafat</h6>
                    <span>Designer, LLCG Team</span>
                  </div>
                </div>
              </div>
              <div className="single-testimonial">
                <div className="round-1 round" />
                <div className="round-2 round" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <div className="client-info">
                  <div className="client-video">
                    <a href="#">
                      <img
                        src="https://i.ibb.co/DWhSr6S/play-button2.png"
                        alt
                      />
                    </a>
                  </div>
                  <div className="client-details">
                    <h6>Yeasin Arafat</h6>
                    <span>Designer, LLCG Team</span>
                  </div>
                </div>
              </div>
              <div className="single-testimonial">
                <div className="round-1 round" />
                <div className="round-2 round" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <div className="client-info">
                  <div className="client-video">
                    <a href="#">
                      <img
                        src="https://i.ibb.co/DWhSr6S/play-button2.png"
                        alt
                      />
                    </a>
                  </div>
                  <div className="client-details">
                    <h6>Yeasin Arafat</h6>
                    <span>Designer, LLCG Team</span>
                  </div>
                </div>
              </div>
              <div className="single-testimonial">
                <div className="round-1 round" />
                <div className="round-2 round" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <div className="client-info">
                  <div className="client-video">
                    <a href="#">
                      <img
                        src="https://i.ibb.co/DWhSr6S/play-button2.png"
                        alt
                      />
                    </a>
                  </div>
                  <div className="client-details">
                    <h6>Yeasin Arafat</h6>
                    <span>Designer, LLCG Team</span>
                  </div>
                </div>
              </div>
              <div className="single-testimonial">
                <div className="round-1 round" />
                <div className="round-2 round" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <div className="client-info">
                  <div className="client-video">
                    <a href="#">
                      <img
                        src="https://i.ibb.co/DWhSr6S/play-button2.png"
                        alt
                      />
                    </a>
                  </div>
                  <div className="client-details">
                    <h6>Yeasin Arafat</h6>
                    <span>Designer, LLCG Team</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
