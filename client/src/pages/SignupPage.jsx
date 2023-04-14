import React, { useState } from "react";
import { Link } from "react-router-dom";
import { OTPModal } from "../components";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { backendUrl } from "../utils";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [email, setEmail] = useState("");
  const toggleModal = () => {
    return setIsShow(!isShow);
  };

  const createUser = async () => {
    if (!email || !password || !mobile || password != password2) {
      console.log("error");
      return;
    }

    const formData = {
      email: email,
      mobile: mobile,
      password: password,
      fullname: name,
    };

    try {
      let res = await axios.post(`${backendUrl}/auth/signup`, formData);

      console.log(res);
      if (res.data.SUCCESS == "TRUE") {
        // setTimeout(() => {
        //   navigate('/home');
        // }, 1000);
        toggleModal();

        // toast.success("Logged in");
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="position-relative align-content-center min-h-[80vh] min-w-[100vw]">
      <Toaster />
      <div className="font-poppins font-bold cursor-pointer text-[26px] text-gradient ml-1 text-center my-3">
        Create your Account
      </div>

      <div className="d-flex align-items-center m-0 p-0">
        <div className="glassContainer card my-auto mx-auto w-[500px] max-w-[80vw] min-h-[370px]">
          <div className="card-body text-center my-auto mt-0 mt-sm-4">
            <form>
              <div className="my-3 credContainer row">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    required={true}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile No."
                    value={mobile}
                    required={true}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
              </div>
              <div className=" mt-4 mb-3 text-start credContainer">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Id"
                  value={email}
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className=" mt-4 mb-3 text-start credContainer">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  required={true}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className=" mt-4 mb-3 text-start credContainer">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Re-enter Password"
                  value={password2}
                  required={true}
                  onChange={(e) => setPassword2(e.target.value)}
                />
              </div>

              <button
                className="btn btn-info btn-block shadow-2 my-3 w-75"
                type="button"
                onClick={(e) => {
                  createUser();
                }}
                style={{
                  color: "white",
                  background: "rgba(13,202,240,0.38699229691876746)",
                }}
              >
                Get OTP
              </button>
            </form>
            <p className="mb-0 text-muted">
              Already have an account?{" "}
              <u>
                <Link to="/login">Login</Link>
              </u>
            </p>
          </div>
        </div>
      </div>
      <OTPModal
        isShow={isShow}
        toggleModal={toggleModal}
        mobile={mobile}
        password={password}
      />
    </div>
  );
};

export default SignupPage;
