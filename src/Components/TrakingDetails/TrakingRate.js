import React from "react";
import { BsFillPersonFill, BsStopwatch } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaHotel } from "react-icons/fa";
import { RiFocus2Line } from "react-icons/ri";
import { AiFillCar, AiOutlineSafetyCertificate } from "react-icons/ai";

export default function TrakingRate() {
  return (
    <section className="traking_rate">
      <div className="container">
        <div className="traking_details">
          <div className="traking_details_right">
            <h1>Everest Base Camp Trek, Nepal</h1>
            <div className="camp_details">
              <div className="rating_details">
                <h6>4.5/5</h6>
              </div>
              <div className="rating_reviews">
                <p> (24 Reviews)</p>
              </div>
              <div className="rating_days">
                <p>
                  <BsStopwatch /> 12D/11N
                </p>
              </div>
              <div className="rating_location">
                <p>
                  <CiLocationOn /> Kathmandu
                </p>
              </div>
            </div>
            <div className="traking_include">
              <div className="all_include">
                <div className="include_icon">
                  <AiFillCar />
                  <p>Transport Included</p>
                </div>
              </div>
              <div className="all_include">
                <div className="include_icon">
                  <BsFillPersonFill />
                  <p>Guide</p>
                </div>
              </div>
              <div className="all_include">
                <div className="include_icon">
                  <AiOutlineSafetyCertificate />
                  <p>Thrillophilia Safe</p>
                </div>
              </div>
              <div className="all_include">
                <div className="include_icon">
                  <FaHotel />
                  <p>Stay Included</p>
                </div>
              </div>
            </div>
            <div className="traking_highlight">
              <div className="all_highlight">
                <h4>Everest Base Camp Trek Highlights</h4>
              </div>
              <div className="highlights_info">
                <p>
                  <RiFocus2Line /> Walk on the footprints of Sir Edmund Hillary
                  to conquer the Highest Mountain on Earth
                </p>
                <p>
                  <RiFocus2Line /> Stand tall at the Kala Patthar to witness the
                  closest panoramic views of Mt. Everest
                </p>
                <p>
                  <RiFocus2Line />
                  Get a thrilling experience of flying in the World's most
                  adventurous flight and shortest runway
                </p>
                <p>
                  <RiFocus2Line />
                  Visit World's Highest Monastery Tengboche, known to be the
                  Spiritual Centre of Kumbhu Valley
                </p>
                <p>
                  <RiFocus2Line />
                  Ensure a smooth experience with all paperwork and trekking
                  permits already arranged
                </p>
              </div>
            </div>
          </div>
          <div className="traking_details_left">
            <div className="traking_rate_details">
              <p>
                Starting from<span> INR 80,999 </span>
              </p>
            </div>
            <div className="traking_cost">
              <h3>INR 39,950</h3>
              <h6>50% Off</h6>
            </div>
            <div className="per_person">
              <p>per Adult</p>
            </div>
            <div className="traling_help">
              <div className="header_contact_traling">
                <p>Everest Base Camp Trek, Nepal: Get 51% off!</p>
              </div>
              <div className="main_form_traking">
                <label>
                  <input
                    name="enquirer_name"
                    type="text"
                    className="text-input undefined__input"
                    placeholder="Your Name"
                  ></input>
                </label>
              </div>
              <div className="main_form_traking">
                <label>
                  <input
                    name="enquirer_name"
                    type="text"
                    className="text-input undefined__input"
                    placeholder="Your Email"
                  ></input>
                </label>
              </div>
              <div className="main_form_traking">
                <label>
                  <input
                    name="enquirer_name"
                    type="number"
                    className="text-input undefined__input"
                    placeholder="Phone Number"
                  ></input>
                </label>
              </div>
              <div className="main_form_traking">
                <label for="date_of_travel" className="undefined__label">
                  <div className="react-datepicker__input-container">
                    <input
                      id="enquiry-date-input"
                      name="date_of_travel"
                      type="text"
                      className="send-enquiry-calendar"
                      placeholder="Choose Date of Travel"
                    ></input>
                  </div>
                </label>
              </div>
              <div className="main_form_traking">
                <textarea
                  name="enquirer_name"
                  type="text-area"
                  className="send-enquiry-calendar"
                  placeholder="Message"
                  rows="2"
                  cols="30"
                ></textarea>
              </div>
              <div className="form_button">
                <button>Send Enquiry</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
