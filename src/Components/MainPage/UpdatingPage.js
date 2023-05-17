import React from "react";

const Data = [
  {
    title: "Flight Booking System",
    about:
      "Technologies provides a platform where a customer can feel free and explore..",
  },
  {
    title: "Hotel Booking",
    about:
      "Technologies provides a platform by which a customer makes an online Hotel Booking..",
  },
  {
    title: "Car Booking",
    about:
      "Our Car Booking System is linked with the APIs which helps in finding the best routes..",
  },
  {
    title: "Bus Booking",
    about:
      "Technologies provides a platform for Bus Booking System, in which a customer feels..",
  },
  {
    title: "Tour Guide",
    about:
      "Tour Guide is with you by day one when you reach out your destination",
  },
  {
    title: "Tour Manager",
    about: " We have our Tour Manager whiche we provide by day one to end",
  },
];

export default function UpdatingPage() {
  return (
    <>
      <div className="travel-port-srdv pt-2 pb-2 pt-md-5 pb-md-5">
        <div className="container">
          <h2 className="white-label-ser heading-1 text-center mb-5">
            Our All Service Which <span>We Provide</span>
          </h2>
          <div className="row">
            {Data.map((data) => {
              return (
                <div className="col-md-6 col-lg-3 p-0">
                  <div className="serv-col">
                    <div className="serv-col-wrap">
                      <div className="icon-serv">
                        <i className="icofont-5-star-hotel" />
                      </div>
                      <div className="serv-col-desc active">
                        <h4>{data.title}</h4>
                        <hr />
                        <p>{data.about}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
