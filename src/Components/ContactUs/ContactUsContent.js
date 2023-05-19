import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

const Data = [
  {
    branch: "Ahmedabad (Head Office)",
    address:
      "308, University Plaza, Above Chocolate Room, Vijay CrossRoads, Navrangpura, Ahmedabad, Gujarat - 380009",
    time: "Office Timings: 11AM to 8PM",
    number1: "9173211901",
    number2: "7016525632",
  },
  {
    branch: "Rajkot",
    address:
      "407, 4th Floor, Business Corner, Opp Indira Circle BRTS, Rajkot, Gujarat - 360005",
    time: "Office Timings: 11AM to 8PM",
    number1: "9173211901",
    number2: "7016525632",
  },
  {
    branch: "Baroda",
    address: "116, Saffron Tower, Fatehgunj, Vadodara, Gujarat - 390008",
    time: "Office Timings: 11AM to 8PM",
    number1: "9173211901",
    number2: "7016525632",
  },
  {
    branch: "Surat",
    address:
      "436, Rajhans Ornate Mall, Nr Jani Farsan, Parle Point Circle, Athwa, Surat, Gujarat - 395007",
    time: "Office Timings: 11AM to 8PM",
    number1: "9173211901",
    number2: "7016525632",
  },
];

export default function ContactUsContent() {
  return (
    <>
      <section className="section_contact_us_content">
        <div className="container">
          <div className="all_card">
            {Data.map((data) => {
              return (
                <div className="card_body">
                  <div className="contact_us_card">
                    <h1>{data.branch}</h1>
                    <address>
                      <GrLocation /> {data.address}
                    </address>
                    <p>{data.time}</p>
                    <div className="number">
                      <a href="tel:+919099400699">
                        <h6>
                          <FiPhoneCall /> {data.number1}
                        </h6>
                      </a>
                    </div>
                    <div className="number">
                      <a href="tel:+91 7016525632">
                        <h6>
                          <FiPhoneCall /> {data.number2}
                        </h6>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
