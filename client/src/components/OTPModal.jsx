import React, { useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import "../stylesheets/OTPModal.css";
import axios from "axios";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../utils";
const OTPModal = ({ isShow, toggleModal, mobile, password }) => {
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");
  const formRef = useRef(null);
  const navigate = useNavigate();

  const inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 1;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      const next = elmnt.target.tabIndex + 1;
      if (next < 7) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  const validate = async () => {
    if (!otp1 || !otp2 || !otp3 || !otp4 || !otp5 || !otp6) {
      toast.error("Please Enter OTP");
      return;
    }
    let otp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
    const formData = {
      mobile: mobile,
      password: password,
      otp: otp,
    };

    try {
      let res = await axios.post(`${backendUrl}/auth/checkotp`, formData);
      if (res.data?.mobile) {
        toast.success("Account Created");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        toast.error("Invalid OTP");
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <Modal
      show={isShow}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      keyboard="false"
    >
      <Modal.Body>
        <div className="container height-100 d-flex justify-content-center align-items-center">
          {" "}
          <div className="relative">
            {" "}
            <form
              ref={formRef}
              className="p-2 text-center"
              onSubmit={(e) => e.preventDefault()}
            >
              {" "}
              <div className="text-centered">
                <div
                  className={`font-poppins font-bold text-[20px] text-center mb-3`}
                >
                  OTP Verification
                </div>
                <button
                  className="btn-close position-absolute"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  style={{
                    top: "5px",
                    right: "5px",
                  }}
                  onClick={toggleModal}
                />
              </div>
              <h4>
                Enter the one time password to your Mobile No. <br />
                <span className="mt-2">{mobile}</span>
              </h4>{" "}
              <div
                id="otp"
                className="inputs d-flex flex-row justify-content-center mt-4"
              >
                {" "}
                <input
                  className="m-2 text-center form-control rounded"
                  name="otp1"
                  type="text"
                  autoComplete="off"
                  value={otp1}
                  onChange={(e) => setOtp1(e.target.value)}
                  tabIndex="1"
                  maxLength="1"
                  onKeyUp={(e) => inputfocus(e)}
                  required
                />{" "}
                <input
                  className="m-2 text-center form-control rounded"
                  name="otp2"
                  type="text"
                  autoComplete="off"
                  value={otp2}
                  onChange={(e) => setOtp2(e.target.value)}
                  tabIndex="2"
                  maxLength="1"
                  onKeyUp={(e) => inputfocus(e)}
                  required
                />{" "}
                <input
                  className="m-2 text-center form-control rounded"
                  name="otp3"
                  type="text"
                  autoComplete="off"
                  value={otp3}
                  onChange={(e) => setOtp3(e.target.value)}
                  tabIndex="3"
                  maxLength="1"
                  onKeyUp={(e) => inputfocus(e)}
                  required
                />{" "}
                <input
                  className="m-2 text-center form-control rounded"
                  name="otp4"
                  type="text"
                  autoComplete="off"
                  value={otp4}
                  onChange={(e) => setOtp4(e.target.value)}
                  tabIndex="4"
                  maxLength="1"
                  onKeyUp={(e) => inputfocus(e)}
                  required
                />{" "}
                <input
                  className="m-2 text-center form-control rounded"
                  name="otp5"
                  type="text"
                  autoComplete="off"
                  value={otp5}
                  onChange={(e) => setOtp5(e.target.value)}
                  tabIndex="5"
                  maxLength="1"
                  onKeyUp={(e) => inputfocus(e)}
                  required
                />{" "}
                <input
                  className="m-2 text-center form-control rounded"
                  name="otp6"
                  type="text"
                  autoComplete="off"
                  value={otp6}
                  onChange={(e) => setOtp6(e.target.value)}
                  tabIndex="6"
                  maxLength="1"
                  onKeyUp={(e) => inputfocus(e)}
                  required
                />{" "}
              </div>{" "}
              <div className="mt-4">
                {" "}
                <button
                  className="btn btn-info px-4"
                  onClick={() => validate()}
                >
                  Validate
                </button>{" "}
              </div>{" "}
            </form>{" "}
            <div className="card-2">
              {" "}
              <div className="content d-flex justify-content-center align-items-center">
                {" "}
                <span>Didn't get the code - </span>{" "}
                <a href="#" className="text-decoration-underline ms-1">
                  Resend
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default OTPModal;
