import React from "react";
import { useState } from "react";
import { data } from "../../Data";

const ContactUsForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log({ firstName, lastName, email, business, message });
    setFirstName("");
    setLastName("");
    setEmail("");
    setBusiness("");
    setMessage("");
  };

  return (
    <>
      <section className="section_contact_us_form">
        {/* <div className="container"> */}
        <div className="contact_us_map">
          <div className="input_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.1442544377733!2d72.50183187519033!3d23.09181457912532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9cdb3d2681e1%3A0x41f52afb675f7ed0!2sSola%2C%20Ahmedabad%2C%20Gujarat%20380060!5e0!3m2!1sen!2sin!4v1683608550227!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <section className="contact_us_section">
          <div className="container">
            <div className="contact_us_part">
              <div className="contact_us_form">
                <div className="form_header">
                  <h1>{data.form_header.title}</h1>
                  <p>{data.form_header_para.title}</p>
                </div>
                <div className="form_main">
                  <div className="form_detail">
                    <input
                      type="text"
                      value={firstName}
                      placeholder="First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                      type="text"
                      value={lastName}
                      placeholder="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                      type="text"
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="text"
                      value={business}
                      placeholder="Business"
                      onChange={(e) => setBusiness(e.target.value)}
                    />
                  </div>
                  <div className="message_detail">
                    <textarea
                      type="text"
                      value={message}
                      placeholder="Enter Message"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <div className="save_information">
                      <button className="save_button" onClick={handleSubmit}>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </div> */}
      </section>
    </>
  );
};

export default ContactUsForm;
