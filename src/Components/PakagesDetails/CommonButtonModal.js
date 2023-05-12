import Modal from "react-bootstrap/Modal";
import React from "react";

export default function CommonButtonModal({ show, handleClose, vishw }) {
  const titleHandler = ()=>{
    switch (vishw) {
      case "things-to-carry":
        return (
          <Modal
            size="lg"
            show={show}
            onHide={handleClose}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Things to Carry
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="Mandatory_Requirements_title">
                <h2>Mandatory Requirements</h2>
                <ul>
                  <li>
                    Medical Certificate
                    <a href="https://invcbl.in/MedicalCertificate" target="blank">
                      (Click here for Download)
                    </a>
                  </li>
                  <li>Original ID Proof with 1 Xerox Copy</li>
                  <li>Softcopy of Fees Receipt</li>
                </ul>
              </div>
              <div className="Mandatory_Requirements_title">
                <h2>Trekking Gears (Available on Rent/Sale)</h2>
                <ul>
                  <li>Trekking Shoes</li>
                  <li>Feather/Down Jacket (-5 to -10 Degree)</li>
                  <li>Rucksack Bag with Raincover (40-60 litres)</li>
                  <li>Rainwear (Poncho)</li>
                  <li>Head Torch</li>
                  <li>Thermal Inner Wear</li>
                  <li>Snow Proof Hand Gloves</li>
                  <li>Thick Woolen Socks</li>
                  <li>Woolen Cap & Neck Warmer</li>
                  <li>Gaiters & Micro Spikes</li>
                </ul>
              </div>
              <div className="Mandatory_Requirements_title">
                <h2>Clothes</h2>
                <ul>
                  <li>4/5 Full Sleeve T-Shirts</li>
                  <li>Normal Jacket/Fleece</li>
                  <li>3/4 Trek Pants (Quick Dry would be Better)</li>
                  <li>Face Mask/Buff</li>
                  <li>Light Weight Towel (Quick Dry)</li>
                </ul>
              </div>
              <div className="Mandatory_Requirements_title">
                <h2>Personal Items</h2>
                <ul>
                  <li>Woolen Hand Gloves</li>
                  <li>Sun Cap & Sun Glasses</li>
                  <li>Sanitiser & Face Mask</li>
                  <li>Slipper/Sandal & Socks</li>
                  <li>Personal Sanitary Items</li>
                  <li>2 Water Bottles & Snacks</li>
                  <li>Lunch Box, Mug & Spoon</li>
                  <li>Toilet Paper & Wet Wipes</li>
                  <li>Sunscreen (SPF 40+) & Lip Balm</li>
                  <li>Camera & Power Banks</li>
                  <li>Plastic Bags/Pouch(for wet clothes)</li>
                  <li>Personal Medication if any</li>
                </ul>
              </div>
              <hr />
              <p>
                For More Information :
                <a href="https://youtu.be/DwIzdiF9BFY" target="blank">
                  WhatToCarry
                </a>
              </p>
            </Modal.Body>
          </Modal>
        );
  
      case "inclusion-exclusion":
        return (
          <Modal
            size="lg"
            show={show}
            onHide={handleClose}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Inclusion & Exclusion
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="inclusion_para">
                <p>
                  Kindly take a humble note that this is an adventurous camping
                  planned to project youth into adventure and Himalayan
                  exploration. Please do not consider this as a tour and
                  Invincible as a tour operator. Our idea is purely to serve
                  adventure with heritage touch.
                </p>
              </div>
              <div className="inclusion_table">
                <h2>Inclusion:</h2>
                <ul>
                  <li>Food (Breakfast, Lunch & Dinner) at Campsite</li>
                  <li>Accommodation in sharing Basis (Tent)</li>
                  <li>Travelling as per your package</li>
                  <li>Instructor & Guide</li>
                  <li>First Aid Support</li>
                  <li>5% GST</li>
                </ul>
              </div>
              <div className="inclusion_table">
                <h2>Exclusion:</h2>
                <ul>
                  <li>Sight-Seeing Entry Fees if any</li>
                  <li>Bathing & Electricity</li>
                  <li>Anything not listed above</li>
                </ul>
              </div>
              <div className="inclusion_note">
                <p>
                  <b>
                    For Delhi to Delhi Package, only bus Ticket booking is
                    considered from Delhi & back. Invincible is not responsible if
                    the bus gets delay or for any other issues regarding it.
                  </b>
                </p>
              </div>
            </Modal.Body>
          </Modal>
        );
        break;
      case "terms-&-conditions":
        return (
          <Modal
            size="lg"
            show={show}
            onHide={handleClose}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Terms & Conditions
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="term_condition_title">
                <h2>Discipline</h2>
                <p>
                  ✓ This is an Adventure Camp and not a leisure tour, so we expect
                  a high level of discipline
                </p>
                <p>
                  ✓ Participants will have to follow the instructions clearly
                  given by the volunteer/guide, Misbehave/Arguing with the
                  volunteers/guide/instructors will be considered as disciplinary
                  issues
                </p>
                <p>
                  ✓ Smoking, Alcohol, Tobacco & Abusive Language are strictly
                  prohibited and if anyone found a suspect in such cases, the
                  participation will be terminated and no further service/return
                  traveling/refund will be offered then after
                </p>
                <p>
                  ✓ Accommodation & Sanitary Facilities for Girls & Boys are
                  separate
                </p>
                <p>✓ Punctuality is taken as a serious matter</p>
              </div>
              <div className="term_condition_2">
                <h2>Change Of Schedule</h2>
                <p>
                  ✓ In case of unforeseen conditions, the schedule/itinerary can
                  be modified/canceled
                </p>
                <p>
                  ✓ Invincible reserves all rights to cancel/shorten/modify the
                  itinerary, and the final decision is authorized with the trustee
                  team
                </p>
              </div>
              <div className="term_condition_note">
                <p>
                  note:
                  <b>
                    Volunteers and support staff will be joining from basecamp
                    only. Participants can call them if they need any help during
                    travel duration
                  </b>
                </p>
              </div>
            </Modal.Body>
          </Modal>
        );
      case "cancellation-policy":
        return (
          <Modal
            size="lg"
            aria-labelledby="example-modal-sizes-title-lg"
            show={show}
            onHide={handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>Cancellation Policy</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <hr />
              <div className="cancel_line">
                <p>
                  Cancellation would be granted by the Senior Registration Manager
                  or Higher Authorities on receiving cancellation requests through
                  the website. The cancellation Amount will be counted on total
                  camp fees only.
                </p>
                <h3>Cancellation Amount will be as per under</h3>
              </div>
              <div className="after_cancel">
                <p>(the percentage shows the amount on total camp fees)…</p>
              </div>
              <div className="cancel_table">
                <ul>
                  <li>Before more than 40 days of Departure, 10%</li>
                  <li>Before 21 to 40 days of Departure, 25%</li>
                  <li>Before 11 to 20 days of Departure, 40%</li>
                  <li>Before 2 to 10 days of Departure, 60%</li>
                  <li>In the last 48 hours of Departure, 90%</li>
                </ul>
              </div>
              <div className="booking_event">
                <h1>How to cancel your booking for any Camp/Event</h1>
              </div>
              <div className="second_table">
                <ul>
                  <li>Login to our Website & then go to your Dashboard</li>
                  <li>Find your upcoming camp for which you are cancelling</li>
                  <li>Click on Cancellation Request & fill the form</li>
                  <li>Mention your reason for cancelling your Camp</li>
                  <li>Submit Your Cancellation Request</li>
                  <li>
                    Cancellation Team will be call you regarding your cancellation
                    within 48 working hours
                  </li>
                  <li>
                    After Canceled your Booking, you will get your refund by
                    account in 7 to 12 working days
                  </li>
                </ul>
              </div>
              <div className="booking_header_3">
                <h2>Reschedule of the Camp/Event:</h2>
                <p>
                  In case of any Emergency Reason situation, we are offering an
                  option of Reschedule your Camp in the next 6 months, only for
                </p>
                <ul>
                  <li>Academic Curriculum (Sudden Change in Exam Schedule)</li>
                  <li>Medical Emergency (Any Serious Injury)</li>
                  <ul className="second_table_booking">
                    <li>
                      Rescheduling is possible only before 7 days of the camp
                      departure, In the last 7 days of departure rescheduling is
                      not provided
                    </li>
                    <li>
                      For this, you have to submit valid proof for the same
                      including a Call letter from the University & College ID
                      Proof in case of exams and Medical Certificate with all the
                      respective reports from the Hospitals (Signed by MBBS post
                      or higher authorities) in case of medical emergencies
                    </li>
                    <li>
                      Excluding this above mentioned reasons, rescheduling option
                      is not available
                    </li>
                    <li>
                      Also participants will have to pay the cancellation charges
                      for travel/accommodation arrangements.
                    </li>
                    <li>
                      This option is given only to those who have valid proof
                      available, other participants have to continue their Camp as
                      per schedule.
                    </li>
                    <li>
                      The rescheduling options are offered only to those who would
                      be facing the emergency other friends or colleagues of that
                      camp have to continue as per their schedule.
                    </li>
                    <li>
                      Rescheduling is given only 1 time, for the Second time
                      Rescheduling & Cancellation option is not available
                    </li>
                  </ul>
                </ul>
              </div>
            </Modal.Body>
          </Modal>
        );
      case "rent/purchase-gears":
        return (
          <Modal
            size="lg"
            aria-labelledby="example-modal-sizes-title-lg"
            show={show}
            onHide={handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>Rent/Purchase Gears</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <hr /> */}
              <div className="item_rent">
                <h4>Item</h4>
                <h4>Rent</h4>
              </div>
              {/* <hr /> */}
              <div className="item_rent">
                <p>Trekking Shoes (Water-Resistant)</p>
                <p> ₹ 300</p>
              </div>
              {/* <hr /> */}
              <div className="item_rent">
                <p>Jacket (Quechua Wedze -5 Degree)</p>
                <p>₹ 200</p>
              </div>
              {/* <hr /> */}
              <div className="item_rent">
                <p>Rucksack Bag with Raincover</p>
                <p> ₹ 250</p>
              </div>
              {/* <hr /> */}
              <div className="item_rent">
                <p>Poncho (Rain Coat)</p>
                <p> ₹ 100</p>
              </div>
              {/* <hr /> */}
              <div className="item_rent">
                <p>Head Torch (Summmit Day Only)</p>
                <p> ₹ 100</p>
              </div>
              {/* <hr /> */}
              <div className="item_rent">
                <p>Gaiters Snowproof</p>
                <p> ₹ 50</p>
              </div>
              {/* <hr /> */}
              <div className="item_rent">
                <p>Micro Spikes (for Summit)</p>
                <p>₹ 100</p>
              </div>
              <div className="disclamber">
                <p>
                  Please Note: Individual will be responsible for any lose/damage
                </p>
              </div>
              {/* <hr /> */}
              {/* <hr /> */}
              <div className="item_rent">
                <h4>Item</h4>
                <h4>Rent</h4>
              </div>
              {/* <hr /> */}
              <div className="item_rent">
                <p>Snowproof Hand Gloves</p>
                <p>₹120</p>
              </div>
              {/* <hr /> */}
              <div className="item_rent">
                <p>Cap with Neck Warmer</p>
                <p>₹ 200</p>
              </div>
              {/* <hr /> */}
              <div className="item_rent">
                <p>Warm Beanie Cap</p>
                <p>₹ 120</p>
              </div>
              {/* <hr /> */}
              <div className="item_rent">
                <p>Woollen Thick Socks</p>
                <p> ₹ 60</p>
              </div>
              {/* <hr /> */}
              <div className="item_rent">
                <p>Thermal Inner Wear Pair</p>
                <p>₹ 380</p>
              </div>
  
              <div className="last_disclamber">
                <p>*Items subject to availability</p>
              </div>
            </Modal.Body>
          </Modal>
        );
      case "how-to-reach?":
        return (
          <Modal
            size="lg"
            aria-labelledby="example-modal-sizes-title-lg"
            show={show}
            onHide={handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>How To Reach?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className="model_how_to_reach_para">
                Kasol is well connected by roads, The reporting places and their
                locations are as under. Please choose as per your package.
              </p>
              <div className="reach_city">
                <h5>Ahmedabad :</h5>
                <p className="title_para">
                  Ahmedabad Junction (Kalupur), Near Dena Bank ATM
                </p>
              </div>
              <div className="reach_city">
                <h5>Delhi :</h5>
                <p className="title_para">Majnu ka Tila</p>
              </div>
              <div className="reach_city">
                <h5>Kasol Campsie :</h5>
                <p className="title_para">Invincible Kasol BaseCamp</p>
              </div>
            </Modal.Body>
          </Modal>
        );
      default:
        break;
    }
  }
  return titleHandler();
}
