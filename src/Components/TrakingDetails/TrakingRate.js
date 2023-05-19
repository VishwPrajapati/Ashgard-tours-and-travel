import React from "react";
import { BsFillPersonFill, BsStopwatch } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaHotel } from "react-icons/fa";
import { RiFocus2Line } from "react-icons/ri";
import { AiFillCar, AiOutlineSafetyCertificate } from "react-icons/ai";
import { data } from "../../Data";

export default function TrakingRate() {
  return (
    <section className="traking_rate">
      <div className="container">
        <div className="traking_details">
          <div className="traking_details_right">
            <h1>{data.traking_details_right.title}</h1>
            <div className="camp_details">
              <div className="rating_details">
                <h6>{data.rating_details1.title}</h6>
              </div>
              <div className="rating_reviews">
                <p>{data.rating_reviews.title}</p>
              </div>
              <div className="rating_days">
                <p>
                  <BsStopwatch /> {data.rating_days.title}
                </p>
              </div>
              <div className="rating_location">
                <p>
                  <CiLocationOn /> {data.rating_location.title}
                </p>
              </div>
            </div>
            <div className="traking_include">
              <div className="all_include">
                <div className="include_icon">
                  <AiFillCar />
                  <p>{data.include_icon1.title}</p>
                </div>
              </div>
              <div className="all_include">
                <div className="include_icon">
                  <BsFillPersonFill />
                  <p>{data.include_icon2.title}</p>
                </div>
              </div>
              <div className="all_include">
                <div className="include_icon">
                  <AiOutlineSafetyCertificate />
                  <p>{data.include_icon3.title}</p>
                </div>
              </div>
              <div className="all_include">
                <div className="include_icon">
                  <FaHotel />
                  <p>{data.include_icon4.title}</p>
                </div>
              </div>
            </div>
            <div className="traking_highlight">
              <div className="all_highlight">
                <h4>{data.all_highlight.title}</h4>
              </div>
              <div className="highlights_info">
                <p>
                  <RiFocus2Line /> {data.highlights_info1.title}
                </p>
                <p>
                  <RiFocus2Line /> {data.highlights_info2.title}
                </p>
                <p>
                  <RiFocus2Line />
                  {data.highlights_info3.title}
                </p>
                <p>
                  <RiFocus2Line />
                  {data.highlights_info4.title}
                </p>
                <p>
                  <RiFocus2Line />
                  {data.highlights_info5.title}
                </p>
              </div>
            </div>
          </div>
          <div className="traking_details_left">
            <div className="traking_rate_details">
              <p>
                {data.traking_rate_details.title}
                <span> {data.traking_rate_details_span.title} </span>
              </p>
            </div>
            <div className="traking_cost">
              <h3>{data.traking_cost.title}</h3>
              <h6>{data.traking_cost_discount.title}</h6>
            </div>
            <div className="per_person">
              <p>{data.per_person.title}</p>
            </div>
            <div className="traling_help">
              <div className="header_contact_traling">
                <p>{data.header_contact_traling.title}</p>
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
                <button>{data.form_button.title}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
