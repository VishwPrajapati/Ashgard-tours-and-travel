import React from "react";
import Slider from "react-slick";

export default function VideoContent() {
  const thunder = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <>
      <section className="video_content">
        <div className="container">
          <div className="content_title">
            <h1>Videos</h1>
            <p>Exclusive footage from our camps</p>
          </div>
          <div className="video">
            <Slider className="video_button" {...thunder}>
              <div className="content_video">
                {/* <div className="round-1 round" />
                <div className="round-2 round" /> */}
                <div className="main_video">
                  <iframe
                    width="100%"
                    height="250"
                    src="https://www.youtube.com/embed/IdejM6wCkxA"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="content_video">
                {/* <div className="round-1 round" />
                <div className="round-2 round" /> */}
                <div className="main_video">
                  <iframe
                    width="100%"
                    height="250"
                    src="https://www.youtube.com/embed/PGjQviV9uuU"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="content_video">
                {/* <div className="round-1 round" />
                <div className="round-2 round" /> */}
                <div className="main_video">
                  <iframe
                    width="100%"
                    height="250"
                    src="https://www.youtube.com/embed/bJsaR9-h26Y"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="content_video">
                {/* <div className="round-1 round" />
                <div className="round-2 round" /> */}
                <div className="main_video">
                  <iframe
                    width="100%"
                    height="250"
                    src="https://www.youtube.com/embed/ejgpomz8eUs"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="content_video">
                {/* <div className="round-1 round" />
                <div className="round-2 round" /> */}
                <div className="main_video">
                  <iframe
                    width="100%"
                    height="250"
                    src="https://www.youtube.com/embed/rgk3o2VX57k"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
