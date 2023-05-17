import React, { useEffect } from "react";
import "../Footer/Footer.css";
import video2 from "../../images/ocean.mp4";
import { FiPhoneCall, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted typeof="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>Keep Touch</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />

            <button
              data-aos="fade-up"
              className="send_button flex"
              type="submit"
            >
              Send
              <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="/" className="logo flex">
                <MdOutlineTravelExplore className="icon" /> Travel
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              This is Travel Agency Name is Ashgard and you can travel any
              places after register
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
            <div className="all_contact_details">
              <div className="contact_information">
                <p>
                  <FiPhoneCall />
                  <a href="tel:+91 9173211901">
                    <h6>+91 9173211901</h6>
                  </a>
                </p>
              </div>
              <div className="contact_information">
                <p>
                  <FiPhoneCall />
                  <a href="tel:+91 9173211901">
                    <h6>+91 7016525632</h6>
                  </a>
                </p>
              </div>
              <div className="contact_information">
                <p>
                  <AiOutlineMail />
                  <a href="mailto:vishw.frontendarmy@gmail.com">
                    <h6>vishw.frontendarmy@gmail.com</h6>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group 1 */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">Our Agency</span>
              <a href="/">
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Services
                </li>
              </a>
              <a href="/">
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Insurance
                </li>
              </a>
              <a href="/">
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Agency
                </li>
              </a>
              <a href="/">
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Tourism
                </li>
              </a>
              <a href="/">
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  payment
                </li>
              </a>
            </div>

            {/* Group 2 */}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">Partners</span>
              <a href="/">
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Bokking
                </li>
              </a>
              <a href="/">
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Rentcars
                </li>
              </a>
              <a href="/">
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Hostelworld
                </li>
              </a>
              <a href="/">
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Trivago
                </li>
              </a>
              <a href="/">
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  TripAdvisior
                </li>
              </a>
            </div>

            {/* Group 3 */}
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">Last Minute</span>
              <a href="/">
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  London
                </li>
              </a>
              <a href="/">
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  France
                </li>
              </a>
              <a href="/">
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Dubai
                </li>
              </a>
              <a href="/">
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Bali
                </li>
              </a>
              <a href="/">
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Singapore
                </li>
              </a>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>Best Travel Website Theme</small>
            <small>Copy Rights Reserved - sence 2002</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
