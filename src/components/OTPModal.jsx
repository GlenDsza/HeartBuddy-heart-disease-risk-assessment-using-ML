import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../stylesheets/OTPModal.css";

const OTPModal = ({ isShow, toggleModal }) => {
  return (
    <>
      <Modal
        show={isShow}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        keyboard="false"
      >
        <Modal.Body>
          <div className="container height-100 d-flex justify-content-center align-items-center">
            {" "}
            <div className="position-relative">
              {" "}
              <div className="p-2 text-center">
                {" "}
                <div className="text-centered">
                  <div
                    className={`font-poppins font-bold text-[20px] text-center`}
                  >
                    OTP Verification
                  </div>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <h6>
                  Please enter the one time password <br /> to verify your
                  account
                </h6>{" "}
                <div>
                  {" "}
                  <span>A code has been sent to</span>{" "}
                  <small>*******9897</small>{" "}
                </div>{" "}
                <div
                  id="otp"
                  className="inputs d-flex flex-row justify-content-center mt-2"
                >
                  {" "}
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    id="first"
                    maxlength="1"
                  />{" "}
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    id="second"
                    maxlength="1"
                  />{" "}
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    id="third"
                    maxlength="1"
                  />{" "}
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    id="fourth"
                    maxlength="1"
                  />{" "}
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    id="fifth"
                    maxlength="1"
                  />{" "}
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    id="sixth"
                    maxlength="1"
                  />{" "}
                </div>{" "}
                <div className="mt-4">
                  {" "}
                  <button className="btn btn-danger px-4 validate">
                    Validate
                  </button>{" "}
                </div>{" "}
              </div>{" "}
              <div className="card-2">
                {" "}
                <div className="content d-flex justify-content-center align-items-center">
                  {" "}
                  <span>Didn't get the code</span>{" "}
                  <a href="#" className="text-decoration-none ms-3">
                    Resend(1/3)
                  </a>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OTPModal;
