import react from "react";
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const ConnectWithUs = () => {
  return (
    <div>
      <section className="connect-with-us-section">
        <div className="container">
          <div className="connect-with-us-part">
            <h1>CONNECT WITH US...</h1>
          </div>
          <div className="connect-with-us-detail">
            <div className="twitter common-connect-logo">
              <FaTwitter />
              <h3>Twitter</h3>
              <a href="https://twitter.com/">Connect With Twitter</a>
            </div>
            <div className="facebook common-connect-logo">
              <BsFacebook />
              <h3>Facebook</h3>
              <a href="https://facebook.com/">Connect With Facebook</a>
            </div>
            <div className="whatsup common-connect-logo">
              <IoLogoWhatsapp />
              <h3>Whats'up</h3>
              <a href="https://whatsup.com/">Connect With What's Up</a>
            </div>
            <div className="insta common-connect-logo">
              <AiFillInstagram />
              <h3>Instagram</h3>
              <a href="https://instagram.com/">Connect With Instagram</a>
            </div>
            <div className="insta common-connect-logo">
              <AiFillYoutube />
              <h3>youtube</h3>
              <a href="https://youtube.com/">Connect with youtube</a>
            </div>
            <div className="mobile common-connect-logo">
              <FiPhoneCall />
              <h3>Call</h3>
              <a href="tel:+91 7016525632">
                <p>7016525632</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectWithUs;
