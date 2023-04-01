import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [name, setName] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <div
      style={{
        minHeight: "80vh",
        minWidth: "100%",
        position: "relative",
        alignContent: "center",
      }}
    >
      <div
        className={`font-poppins font-bold cursor-pointer text-[26px] text-gradient ml-1 text-center my-3`}
      >
        Create your Account
      </div>
      <div className="d-flex align-items-center m-0 p-0">
        <div id="loginContainer" className="card my-auto mx-auto">
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
                  value={password}
                  required={true}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                className="btn btn-info btn-block shadow-2 my-3 w-75"
                style={{
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
    </div>
  );
};

export default SignupPage;
