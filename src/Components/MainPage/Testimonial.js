import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../../Data";
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

  const Data = [
    {
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      name: "Yeasin Arafat",
      define: "Designer, LLCG Team",
    },
    {
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      name: "Yeasin Arafat",
      define: "Designer, LLCG Team",
    },
    {
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      name: "Yeasin Arafat",
      define: "Designer, LLCG Team",
    },
    {
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      name: "Yeasin Arafat",
      define: "Designer, LLCG Team",
    },
    {
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      name: "Yeasin Arafat",
      define: "Designer, LLCG Team",
    },
  ];
  return (
    <>
      <section className="testimonial-area">
        <div className="container">
          <div className="sec-title white-title">
            <h2>{data.sec_title.title}</h2>
            <p>{data.sec_title_para.title}</p>
          </div>
          <div className="testimonial-content owl-carousel">
            <Slider {...settings}>
              {Data.map((data) => {
                return (
                  <div className="single-testimonial">
                    <div className="round-1 round" />
                    <div className="round-2 round" />
                    <p>{data.para}</p>
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
                        <h6>{data.name}</h6>
                        <span>{data.define}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
