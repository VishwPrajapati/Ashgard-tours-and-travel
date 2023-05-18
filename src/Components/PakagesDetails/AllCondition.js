import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import CommonButtonModal from "./CommonButtonModal";

export default function AllCondition() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);

  const [currentModal, setCurrentModal] = useState(" ");

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleClose3 = () => setShow3(false);
  const handleClose4 = () => setShow4(false);
  const handleClose5 = () => setShow5(false);
  const handleClose6 = () => setShow6(false);

  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);
  const handleShow3 = () => setShow3(true);
  const handleShow4 = () => setShow4(true);
  const handleShow5 = () => setShow5(true);
  const handleShow6 = () => setShow6(true);

  const renderButtonModal = () => {
    switch (currentModal) {
      case "inclusion-exclusion":
        return (
          <CommonButtonModal
            show={show6}
            handleClose={handleClose6}
            vishw="inclusion-exclusion"
          />
        );

      case "things-to-carry":
        return (
          <CommonButtonModal
            show={show5}
            handleClose={handleClose5}
            vishw="things-to-carry"
          />
        );

      case "rent/purchase-gears":
        return (
          <CommonButtonModal
            vishw="rent/purchase-gears"
            show={show2}
            handleClose={handleClose2}
          />
        );
      case "terms-&-conditions":
        return (
          <CommonButtonModal
            vishw="things-to-carry"
            show={show4}
            handleClose={handleClose4}
          />
        );

      case "how-to-reach?":
        return (
          <CommonButtonModal
            vishw="how-to-reach?"
            show={show}
            handleClose={handleClose}
          />
        );
      case "cancellation-policy":
        return (
          <CommonButtonModal
            vishw="cancellation-policy"
            show={show3}
            handleClose={handleClose3}
          />
        );

      default:
        break;
    }
    return <></>;
  };

  return (
    <>
      <section className="all_condition_section">
        <div className="container">
          <div className="all_button">
            <div className="button_condition">
              <button
                variant="primary"
                onClick={() => {
                  setCurrentModal("inclusion-exclusion");
                  handleShow6();
                }}
              >
                Inclusion & Exclusion <AiOutlineArrowRight />
              </button>
            </div>
            <div className="button_condition">
              <button
                variant="primary"
                onClick={() => {
                  setCurrentModal("things-to-carry");
                  handleShow5();
                }}
              >
                Things to Carry <AiOutlineArrowRight />
              </button>
            </div>
            <div className="button_condition">
              <button
                variant="primary"
                onClick={() => {
                  handleShow4();
                  setCurrentModal("terms-&-conditions");
                }}
              >
                Terms & Conditions <AiOutlineArrowRight />
              </button>
            </div>
            <div className="button_condition">
              <button
                variant="primary"
                onClick={() => {
                  handleShow2();
                  setCurrentModal("rent/purchase-gears");
                }}
              >
                Rent/Purchase Gears <AiOutlineArrowRight />
              </button>
            </div>
            <div className="button_condition">
              <button
                variant="primary"
                onClick={() => {
                  handleShow();
                  setCurrentModal("how-to-reach?");
                }}
              >
                How To Reach? <AiOutlineArrowRight />
              </button>
            </div>
            <div className="button_condition">
              <button
                variant="primary"
                onClick={() => {
                  handleShow3();
                  setCurrentModal("cancellation-policy");
                }}
              >
                Cancellation Policy <AiOutlineArrowRight />
              </button>
            </div>
            {renderButtonModal()}
          </div>
        </div>
      </section>
    </>
  );
}
