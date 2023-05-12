import React from "react";

export default function VideoContent() {
  return (
    <>
      <section className="video_content">
        <div className="container">
          <div className="content_title">
            <h1>Videos</h1>
            <p>Exclusive footage from our camps</p>
          </div>
          <div className="video">
            <div className="content_video">
              <div className="main_video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/IdejM6wCkxA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="content_video">
              <div className="main_video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/PGjQviV9uuU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="content_video">
              <div className="main_video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/bJsaR9-h26Y"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="content_video">
              <div className="main_video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ejgpomz8eUs"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="content_video">
              <div className="main_video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/rgk3o2VX57k"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
