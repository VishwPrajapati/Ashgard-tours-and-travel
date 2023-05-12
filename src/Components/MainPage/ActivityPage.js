import React from "react";
import img from "../../images/activity-1.jpg";
import img2 from "../../images/activity-2.jpg";
import img3 from "../../images/activity-3.jpg";
import img4 from "../../images/activity-4.jpg";

export default function ActivityPage() {
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
              <div className="activiti_places">
                <div className="image_activity">
                  <img src={img} alt="image" />
                </div>
                <div className="tracking_info">
                  <h1>Trekking Tours</h1>
                  <button>View Details</button>
                </div>
                <div className="number_activity">01</div>
              </div>
              <div className="activiti_places">
                <div className="image_activity">
                  <img src={img2} alt="image" />
                </div>
                <div className="tracking_info">
                  <h1>Camping Tours</h1>
                  <button>View Details</button>
                </div>
                <div className="number_activity">02</div>
              </div>
              <div className="activiti_places">
                <div className="image_activity">
                  <img src={img3} alt="image" />
                </div>
                <div className="tracking_info">
                  <h1>Paragliding Tours</h1>
                  <button>View Details</button>
                </div>
                <div className="number_activity">03</div>
              </div>
              <div className="activiti_places">
                <div className="image_activity">
                  <img src={img4} alt="image" />
                </div>
                <div className="tracking_info">
                  <h1>Motorbike Tours</h1>
                  <button>View Details</button>
                </div>
                <div className="number_activity">04</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
