import React from "react";
import img from "../../images/traking_1.jpg";
import img2 from "../../images/tent_1.jpg";
import img3 from "../../images/paraglinding.jpg";
import img4 from "../../images/moterbike_tour.jpg";
import img5 from "../../images/scooba_diving.jpg";
import img6 from "../../images/skydiving_3.jpg";

import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Data = [
  {
    imgsrc: img,
    title: "Trekking Tours",
    button: "View Details",
  },
  {
    imgsrc: img2,
    title: "Camping Tours",
    button: "View Details",
  },
  {
    imgsrc: img3,
    title: "Paragliding Tours",
    button: "View Details",
  },
  {
    imgsrc: img4,
    title: "Motorbike Tours",
    button: "View Details",
  },
  {
    imgsrc: img5,
    title: "Scuba Diving",
    button: "View Details",
  },
  {
    imgsrc: img6,
    title: "skydiving",
    button: "View Details",
  },
];

export default function ActivityPage() {
  const navigate = useNavigate();
  return (
    <>
      <section className="activity_section">
        <div className="container">
          <div className="title_activity">
            <h1>Activities</h1>
            <p>
              The magic of white water rafting, the adrenaline pumping with the
              thrill of negotiating a rapid or just gently floating past
              terraced hillsides and forest.
            </p>
          </div>
          <div className="all_activity">
            <div className="activity_content">
              {Data.map((data) => {
                return (
                  <div className="activiti_places">
                    <div className="image_activity">
                      <img src={data.imgsrc} alt="image" />
                    </div>
                    <div className="tracking_info">
                      <h1>{data.title}</h1>
                      <button
                        onClick={() => {
                          navigate("/trakingpage");
                        }}
                      >
                        {data.button}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
