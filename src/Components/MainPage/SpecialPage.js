import React from "react";
import { BsTerminalFill } from "react-icons/bs";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { HiReceiptRefund } from "react-icons/hi";
import { MdOutlineSecurity } from "react-icons/md";
import { BiGroup, BiTimeFive } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import img from "../../images/wedding-tour.jpg";

export default function SpecialPage() {
  return (
    <>
      <section className="special_offer_section">
        <div className="container">
          <div className="all_special_offer">
            <div className="special_offer">
              <div className="left_side_offer">
                <h1>Special Tour Packages</h1>
                <p>
                  India, the land of cultural diversities offers a life full of
                  colors. The land is filled with the colors of various cultures
                  spread across the land. The country has come up fast as the
                  favored tourist destination among the travelers of the world.
                  The beauty of the place is impeccable and dotted with probably
                  most of the wonders of the nature. One can find the lofty
                  mountains, misty skies along with the vastness of sea with the
                  perennial and seasonal rivers to support them. The diversified
                  cultures also form the colorful side of the land.
                </p>
                <div className="tours_details">
                  <div className="all_details">
                    <div className="left_details">
                      <h1>
                        <BiGroup /> Wedding Tours
                      </h1>
                      <p>
                        Wedding Packages are arranged to provide an insight into
                        the lifestyle of the Indian and the best of the
                        weddings.
                      </p>
                      <h1>
                        <AiOutlineHeart /> Honeymoon Tour
                      </h1>
                      <p>
                        Get deals on Hotel Booking – Book budget hotels, cheap
                        hotels, 5 star hotels in special honeymoon and best
                        destination in India.
                      </p>
                    </div>
                    <div className="img_tour">
                      <img src={img} alt="honeymoon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="right_side_offer">
                <div className="safety">
                  <div className="intrcution">
                    <h1>Guideline For Safety</h1>
                  </div>
                  <div className="icon_safety">
                    <p>
                      <BsTerminalFill /> Terms & Conditions
                    </p>
                    <p>
                      <RiGitRepositoryPrivateLine /> Privacy Policy
                    </p>
                    <p>
                      <HiReceiptRefund /> Refund Policy / Cancellation Policy
                    </p>
                    <p>
                      <MdOutlineSecurity /> Safety & Security /
                    </p>
                    <p>
                      <BiTimeFive /> 24*7 Support / Quick Booking/
                    </p>
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
