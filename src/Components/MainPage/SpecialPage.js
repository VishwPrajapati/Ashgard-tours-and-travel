import React from "react";
import { BsTerminalFill } from "react-icons/bs";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { HiReceiptRefund } from "react-icons/hi";
import { MdOutlineSecurity } from "react-icons/md";
import { BiGroup, BiTimeFive } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import img from "../../images/wedding-tour.jpg";
import { data } from "../../Data";

export default function SpecialPage() {
  return (
    <>
      <section className="special_offer_section">
        <div className="container">
          <div className="all_special_offer">
            <div className="special_offer">
              <div className="left_side_offer">
                <h1>{data.left_side_offer.title}</h1>
                <p>{data.left_side_offer_para.title}</p>
                <div className="tours_details tour_width">
                  <div className="all_details">
                    <div className="left_details">
                      <h1>
                        <BiGroup /> {data.left_details.title}
                      </h1>
                      <p>{data.left_details_para.title}</p>
                      <h1>
                        <AiOutlineHeart /> {data.left_details1.title}
                      </h1>
                      <p>{data.left_details_para1.title}</p>
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
                    <h1>{data.intrcution.title}</h1>
                  </div>
                  <div className="icon_safety">
                    <p>
                      <BsTerminalFill /> {data.icon_safety1.title}
                    </p>
                    <p>
                      <RiGitRepositoryPrivateLine /> {data.icon_safety2.title}
                    </p>
                    <p>
                      <HiReceiptRefund /> {data.icon_safety3.title}
                    </p>
                    <p>
                      <MdOutlineSecurity />
                      {data.icon_safety4.title}
                    </p>
                    <p>
                      <BiTimeFive /> {data.icon_safety5.title}
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
