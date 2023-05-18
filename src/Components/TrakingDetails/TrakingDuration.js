import React from "react";
import { NavLink } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineDone } from "react-icons/md";

export default function TrakingDuration() {
  return (
    <>
      <section className="traking_duration">
        <div className="container">
          <div className="duration_time">
            <div className="main_time_div">
              <h2>Everest Base Camp Trek Overview</h2>
            </div>
            <div className="duration_info">
              <div className="duration_all_info">
                <div className="duration_all_para">
                  <strong>
                    <p>About Everest Base Camp Trek:</p>
                  </strong>
                  <p>
                    They call it the “steps to heaven” for a good reason. To go
                    to the base camp of the highest mountain in the world is on
                    every mountain lover’s bucket list. You will look at the
                    scenery that’s so breathtakingly stunning and unlike any
                    mountainous terrain that you have ever seen before –
                    changing from lush green farmland, dense forest, and
                    glistening blue fast-flowing rivers to the barren land and
                    glacial pools the higher you climb – that you realize it was
                    a good decision. Here you are, conquering Everest like a
                    warrior.
                  </p>
                  <p>
                    When you'll reach the top of the final climb, stumbling over
                    loose rocks and onto a canvas of white, all you will do is
                    sit and admire what had become one of your greatest
                    achievements.
                  </p>

                  <div className="duration_departures">
                    <div className="duration_all_departures">
                      <div className="departures_header">
                        <p>Available Group Departures:</p>
                      </div>
                      <div className="depatures_dates_info">
                        <div className="depatures_dates">
                          <p>➔ March: 1, 4, 10, 11, 11, 15, 19, 23, 27,31 </p>
                          <p>➔ April: 1, 9, 11, 15, 26, 28, 30</p>
                          <p>➔ May: 1, 6, 12, 14,15, 21, 25, 27, 30</p>
                          <p>➔ June: 1, 5</p>
                          <p>➔ Sep: 4, 5, 11, 12, 18, 19, 25, 26</p>
                          <p>➔ Oct: 2, 3, 9, 10, 16, 17, 23, 24, 30, 31</p>
                          <p>➔ Nov: 6, 7, 13, 14, 20, 21, 27, 28</p>
                          <p>➔ Dec: 4, 5, 11, 12, 17, 18, 22</p>
                          <p className="note">
                            Note: Customisation available on request
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="duration_info_right">
                <div className="duration_question">
                  <div className="duration_question_para">
                    <h6>Got a Question?</h6>
                    <hr />
                    <p>
                      Our Destination expert will be happy to help you resolve
                      your queries for this tour.
                    </p>
                    <div className="duration_para_number">
                      <p>
                        <NavLink to="tel:+91 9173211901">
                          <FiPhoneCall /> +91 7016525632
                        </NavLink>
                      </p>
                    </div>
                    <div className="number_calling_time">
                      <p>10:30 AM - 8:00 PM (Mon to Sat)</p>
                    </div>
                  </div>
                  <div className="our_qualification">
                    <div className="full_qualification">
                      <h6>Why Thrillophilia</h6>
                    </div>
                    <div className="all_condition">
                      <h6>
                        <MdOutlineDone /> Verified Reviews
                      </h6>
                      <p>25000+ Pictures and Reviews on the platform.</p>
                    </div>
                    <div className="all_condition">
                      <h6>
                        <MdOutlineDone /> 10000+ Tours and Activities
                      </h6>
                      <p>
                        We have activities across 17 countries, across every
                        category so that you never miss best things to do
                        anywhere.
                      </p>
                    </div>
                    <div className="all_condition">
                      <h6>
                        <MdOutlineDone />
                        Customer Delight
                      </h6>
                      <p>
                        We are always able to support you so that you have a
                        hassle free experience.
                      </p>
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
