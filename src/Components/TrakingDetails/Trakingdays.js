import React from "react";
import img1 from "../../../src/images/pic_1.jpg";

const Data = [
  {
    day: "DAY 1 • MAY 08, 2023",
    destrination: "Reporting at Kasol Campsite",
    about: "Day for Acclimatisation & Preparation Know more",
    imgsrc: img1,
  },
  {
    day: "DAY 2 • MAY 08, 2023",
    destrination: "Reporting at Kasol Campsite",
    about: "Day for Acclimatisation & Preparation Know more",
    imgsrc: img1,
  },
  {
    day: "DAY 3 • MAY 08, 2023",
    destrination: "Reporting at Kasol Campsite",
    about: "Day for Acclimatisation & Preparation Know more",
    imgsrc: img1,
  },
  {
    day: "DAY 4 • MAY 08, 2023",
    destrination: "Reporting at Kasol Campsite",
    about: "Day for Acclimatisation & Preparation Know more",
    imgsrc: "tourist_img_3.jpg",
  },
];

export default function DetailsTour() {
  return (
    <>
      <section className="details_tour">
        <div className="container">
          <div className="Schedule_tour">
            <h1>Schedule</h1>
          </div>
          {Data.map((data) => {
            return (
              <div className="details_day">
                <p>{data.day}</p>
                <h3>{data.destrination}</h3>
                <p>{data.about} </p>
                <div className="details_img">
                  <img src={data.imgsrc} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
