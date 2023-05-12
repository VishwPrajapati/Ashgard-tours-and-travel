import React from "react";
import img from "../../../src/images/earth-pic.jpg";

export default function AboutUsContent() {
  return (
    <>
      <section className="about_us_Para">
        <div className="container">
          <div className="full_content">
            <div className="right_content">
              <div className="content_para">
                <p>
                  ​Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim.
                </p>
                <p>
                  ​Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <p>
                  ​Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="left_content">
              <div className="img_content">
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
