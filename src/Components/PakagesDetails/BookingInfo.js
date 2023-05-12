import React from "react";
import { AiFillCar, AiOutlineDownload } from "react-icons/ai";
import { GiDuration } from "react-icons/gi";
import pdfFile from "../../images/Vishw_190160116121_removed.pdf";
export default function BookingInfo() {
  return (
    <>
      <section className="booking_info">
        <div className="container">
          <div className="full_booking_info">
            <div className="right_info">
              <h1>Kasol Sar Pass Trek</h1>
              <h3>Experience the most glamorous trek of Himalayas!</h3>
              <div className="info_durability">
                <div className="icon_details">
                  <h1>
                    <GiDuration />
                    Duration
                  </h1>
                  <p>6 days / 5 nights</p>
                </div>
                <div className="icon_details">
                  <h1>
                    <GiDuration />
                    Difficulty
                  </h1>
                  <p>Easy to Moderate</p>
                </div>
                <div className="icon_details">
                  <h1>
                    <GiDuration />
                    Age Group
                  </h1>
                  <p>15-35 years</p>
                </div>
                <div className="icon_details">
                  <h1>
                    <GiDuration />
                    Max Altitude
                  </h1>
                  <p>13,850 ft</p>
                </div>
                <div className="alert_div">
                  <h1>Important Update</h1>
                  <p>For Flight booking, Call us on 9081680699.</p>
                </div>
                <div className="about_info">
                  <h1>About</h1>
                  <p>
                    Kasol Sar Pass trek (13850 ft) tucked away in the folds of
                    Pir Panjal Range, hosts a trail along the changing scenes of
                    the turbulent Parvati River, quaint hamlets, gushing
                    waterfalls, endless forests, crisp green meadows, pebbled
                    rivulets and so much more that it’s hard not to give the
                    plot right away
                  </p>

                  <a href={pdfFile} download>
                    {/* Brochure */}
                    <button>
                      <AiOutlineDownload /> Brochure
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="left_info">
              <div className="card_div">
                <div className="main_card">
                  <h1>₹6,999 / person</h1>
                  <h2>Includes</h2>
                </div>
                <div className="full_icon">
                  <div className="right_card">
                    <p>
                      {" "}
                      <AiFillCar /> GST
                    </p>
                    <p>
                      {" "}
                      <AiFillCar /> Accommodation
                    </p>
                    <p>
                      {" "}
                      <AiFillCar /> First Aid
                    </p>
                  </div>
                  <div className="left_card">
                    <p>
                      {" "}
                      <AiFillCar /> Food
                    </p>
                    <p>
                      {" "}
                      <AiFillCar /> Instructor
                    </p>
                    <p>
                      {" "}
                      <AiFillCar /> Travelling
                    </p>
                  </div>
                </div>
                <button>Booking Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
