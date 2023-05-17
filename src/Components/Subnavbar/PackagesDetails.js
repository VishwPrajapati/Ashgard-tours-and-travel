import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function PackagesDetails(props) {
  const navigate = useNavigate();
  return (
    <>
      <section className="main container section">
        <div className="secTitle">
          <h3 data-aos="fade-up" className="title">
            {props.title.title}
          </h3>
        </div>
        <div className="secContent grid">
          {props.packagesDetails.map((data) => {
            return (
              <div
                key={data.id}
                data-aos="fade-up"
                className="singleDestination"
              >
                <div className="imageDiv">
                  <img src={data.imgSrc} alt={data.destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{data.destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{data.location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{data.grade}</span>
                    </div>
                    <div className="price">
                      <h5>{data.fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{data.description}</p>
                  </div>

                  <div className="button_booking">
                    <button
                      className="button_card flex"
                      onClick={() => {
                        navigate("/pakageinfo");
                      }}
                    >
                      Details
                    </button>
                    <button className="button_card flex">Book Now</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
