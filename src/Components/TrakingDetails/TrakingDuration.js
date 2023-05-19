import React from "react";
import { NavLink } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineDone } from "react-icons/md";
import { data } from "../../Data";

export default function TrakingDuration() {
  return (
    <>
      <section className="traking_duration">
        <div className="container">
          <div className="duration_time">
            <div className="main_time_div">
              <h2>{data.main_time_div.title}</h2>
            </div>
            <div className="duration_info">
              <div className="duration_all_info">
                <div className="duration_all_para">
                  <strong>
                    <p>{data.duration_all_para.title}</p>
                  </strong>
                  <p>{data.duration_all_para1.title}</p>
                  <p>{data.duration_all_para2.title}</p>

                  <div className="duration_departures">
                    <div className="duration_all_departures">
                      <div className="departures_header">
                        <p>{data.departures_header.title}</p>
                      </div>
                      <div className="depatures_dates_info">
                        <div className="depatures_dates">
                          <p>{data.departures_header1.title}</p>
                          <p>{data.departures_header2.title}</p>
                          <p>{data.departures_header3.title}</p>
                          <p>{data.departures_header4.title}</p>
                          <p>{data.departures_header5.title}</p>
                          <p>{data.departures_header6.title}</p>
                          <p>{data.departures_header7.title}</p>
                          <p>{data.departures_header8.title}</p>
                          <p className="note">{data.note.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="duration_info_right">
                <div className="duration_question">
                  <div className="duration_question_para">
                    <h6>{data.duration_question_para.title}</h6>
                    <hr />
                    <p>{data.duration_question_para1.title}</p>
                    <div className="duration_para_number">
                      <p>
                        <NavLink to="tel:+91 9173211901">
                          <FiPhoneCall /> {data.duration_para_number.title}
                        </NavLink>
                      </p>
                    </div>
                    <div className="number_calling_time">
                      <p>{data.number_calling_time.title}</p>
                    </div>
                  </div>
                  <div className="our_qualification">
                    <div className="full_qualification">
                      <h6>{data.full_qualification.title}</h6>
                    </div>
                    <div className="all_condition">
                      <h6>
                        <MdOutlineDone /> {data.all_condition_title1.title}
                      </h6>
                      <p>{data.all_condition_para1.title}</p>
                    </div>
                    <div className="all_condition">
                      <h6>
                        <MdOutlineDone /> {data.all_condition_title2.title}
                      </h6>
                      <p>{data.all_condition_para2.title}</p>
                    </div>
                    <div className="all_condition">
                      <h6>
                        <MdOutlineDone />
                        {data.all_condition_title3.title}
                      </h6>
                      <p>{data.all_condition_para3.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
