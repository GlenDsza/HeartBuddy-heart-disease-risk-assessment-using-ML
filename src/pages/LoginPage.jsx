import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="position-relative align-content-center min-h-[80vh] min-w-[100vw]">
      <div className="font-poppins font-bold cursor-pointer text-[26px] text-gradient ml-1 text-center my-3">
        Login to your Account
      </div>
      <div className="d-flex align-items-center m-0 p-0">
        <div className="glassContainer card my-auto mx-auto w-[500px] max-w-[80vw] min-h-[370px]">
          <div className="card-body text-center my-auto mt-0 mt-sm-4">
            <form>
              <div className="my-3 text-start credContainer">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile No."
                  value={mobile}
                  required={true}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="mt-4 mb-3 text-start credContainer">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
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
                Log in
              </button>
            </form>
            <p className="mb-2 text-muted">
              Forgot password?{" "}
              <u>
                <Link to="/forgotPassword"> Reset</Link>
              </u>
            </p>
            <p className="mb-0 text-muted">
              Don't have account yet?{" "}
              <u>
                <Link to="/signup">Signup</Link>
              </u>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
