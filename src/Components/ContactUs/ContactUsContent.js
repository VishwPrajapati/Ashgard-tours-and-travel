import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

export default function ContactUsContent() {
  return (
    <>
      <section className="section_contact_us_content">
        <div className="container">
          <div className="all_card">
            <div className="card_body">
              <div className="contact_us_card">
                <h1>Ahmedabad (Head Office)</h1>
                <address>
                  <GrLocation /> 308, University Plaza, Above Chocolate Room,
                  Vijay CrossRoads, Navrangpura, Ahmedabad, Gujarat - 380009
                </address>
                <p>Office Timings: 11AM to 8PM</p>
                <div className="number">
                  <a href="tel:+919099400699">
                    <i>
                      <FiPhoneCall /> 9173211901
                    </i>
                  </a>
                </div>
                <div className="number">
                  <a href="tel:+91 7016525632">
                    <i>
                      <FiPhoneCall /> 7016525632
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="card_body">
              <div className="contact_us_card">
                <h1>Rajkot</h1>
                <address>
                  <GrLocation /> 407, 4th Floor, Business Corner, Opp Indira
                  Circle BRTS, Rajkot, Gujarat - 360005
                </address>
                <p>Office Timings: 11AM to 8PM</p>
                <div className="number">
                  <a href="tel:+919099400699">
                    <i>
                      <FiPhoneCall /> 9173211901
                    </i>
                  </a>
                </div>
                <div className="number">
                  <a href="tel:+919099400699">
                    <i>
                      <FiPhoneCall /> 7016525632
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="card_body">
              <div className="contact_us_card">
                <h1>Baroda</h1>
                <address>
                  <GrLocation /> 116, Saffron Tower, Fatehgunj, Vadodara,
                  Gujarat - 390008
                </address>
                <p>Office Timings: 11AM to 8PM</p>
                <div className="number">
                  <a href="tel:+919099400699">
                    <i>
                      <FiPhoneCall /> 9173211901
                    </i>
                  </a>
                </div>
                <div className="number">
                  <a href="tel:+919099400699">
                    <i>
                      <FiPhoneCall /> 7016525632
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="card_body">
              <div className="contact_us_card">
                <h1>Surat</h1>
                <address>
                  <GrLocation /> 436, Rajhans Ornate Mall, Nr Jani Farsan, Parle
                  Point Circle, Athwa, Surat, Gujarat - 395007
                </address>
                <p>Office Timings: 11AM to 8PM</p>
                <div className="number">
                  <a href="tel:+919099400699">
                    <i>
                      <FiPhoneCall /> 9173211901
                    </i>
                  </a>
                </div>
                <div className="number">
                  <a href="tel:+919099400699">
                    <i>
                      <FiPhoneCall /> 7016525632
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
