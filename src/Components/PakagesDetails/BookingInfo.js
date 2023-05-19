import React from "react";
import { AiFillCar, AiOutlineDownload } from "react-icons/ai";
import pdfFile from "../../images/Vishw_190160116121_removed.pdf";
import { data } from "../../Data";

export default function BookingInfo() {
  return (
    <>
      <section className="booking_info">
        <div className="container">
          <div className="full_booking_info">
            <div className="right_info">
              <h1>{data.right_info_header.title}</h1>
              <h3>{data.right_info_para.title}</h3>
              <div className="info_durability">
                <div className="icon_details">
                  <h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 19a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm0-4a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm-5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm7-12h-1V2a1 1 0 0 0-2 0v1H8V2a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11H4V6a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V5h8v1a1 1 0 0 0 2 0V5h1a1 1 0 0 1 1 1ZM7 15a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm0 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1Z"
                      />
                    </svg>
                    {data.icon_details_1.title}
                  </h1>
                  <p>{data.icon_details_para1.title}</p>
                </div>
                <div className="icon_details">
                  <h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2a8 8 0 0 0-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8Zm0 17.65c-2.13-2-6-6.31-6-9.65a6 6 0 0 1 12 0c0 3.34-3.87 7.66-6 9.65ZM12 6a4 4 0 1 0 4 4a4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2Z"
                      />
                    </svg>
                    {data.icon_details_2.title}
                  </h1>
                  <p>{data.icon_details_para2.title}</p>
                </div>
                <div className="icon_details">
                  <h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12.3 12.22A4.92 4.92 0 0 0 14 8.5a5 5 0 0 0-10 0a4.92 4.92 0 0 0 1.7 3.72A8 8 0 0 0 1 19.5a1 1 0 0 0 2 0a6 6 0 0 1 12 0a1 1 0 0 0 2 0a8 8 0 0 0-4.7-7.28ZM9 11.5a3 3 0 1 1 3-3a3 3 0 0 1-3 3Zm9.74.32A5 5 0 0 0 15 3.5a1 1 0 0 0 0 2a3 3 0 0 1 3 3a3 3 0 0 1-1.5 2.59a1 1 0 0 0-.5.84a1 1 0 0 0 .45.86l.39.26l.13.07a7 7 0 0 1 4 6.38a1 1 0 0 0 2 0a9 9 0 0 0-4.23-7.68Z"
                      />
                    </svg>
                    {data.icon_details_3.title}
                  </h1>
                  <p>{data.icon_details_para3.title}</p>
                </div>
                <div className="icon_details">
                  <h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M18 10a4 4 0 1 0-4-4a4 4 0 0 0 4 4Zm0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2Zm-1.15 8.47a1 1 0 0 0-1.7 0l-1 1.63l-3.29-5.6a1 1 0 0 0-1.72 0l-7 12A1 1 0 0 0 3 22h18a1 1 0 0 0 .85-1.53ZM10.45 20H4.74L10 11l2.94 5l-1.25 2Zm2.35 0l1.49-2.37l.71-1.06l1-1.68L19.2 20Z"
                      />
                    </svg>
                    {data.icon_details_4.title}
                  </h1>
                  <p>{data.icon_details_para4.title}</p>
                </div>
                <div className="alert_div">
                  <h1>{data.alert_div_header.title}</h1>
                  <p>{data.alert_div_para.title}</p>
                </div>
                <div className="about_info">
                  <h1>{data.about_info.title}</h1>
                  <p>{data.about_info_para.title}</p>

                  <a href={pdfFile} download>
                    {/* Brochure */}
                    <button>
                      <AiOutlineDownload /> {data.about_info_button.title}
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="left_info">
              <div className="card_div">
                <div className="main_card">
                  <h1>₹6,999 / person</h1>
                  <h2>Includes</h2>
                </div>
                <div className="full_icon">
                  <div className="right_card">
                    <p>
                      <AiFillCar /> {data.right_card_1.title}
                    </p>
                    <p>
                      <AiFillCar /> {data.right_card_2.title}
                    </p>
                    <p>
                      <AiFillCar /> {data.right_card_3.title}
                    </p>
                  </div>
                  <div className="left_card">
                    <p>
                      <AiFillCar />
                      {data.right_card_4.title}
                    </p>
                    <p>
                      <AiFillCar /> {data.right_card_5.title}
                    </p>
                    <p>
                      <AiFillCar /> {data.right_card_6.title}
                    </p>
                  </div>
                </div>
                <button>{data.right_card_button.title}</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
