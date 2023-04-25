import React, { useEffect, useState } from "react";
import Graph from "../components/Graph";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../utils";

export default function HomePage() {
  const [data, setData] = useState({});

  const getData = async () => {
    const formData = {
      mobile: sessionStorage.getItem("mobile"),
    };
    try {
      let res = await axios.post(`${backendUrl}/getlastrecord`, formData);

      if (res.data && res.data?.RESULT) {
        console.log(res.data);
        setData(res.data.RESULT);
      } else {
        toast.error("Some Error Occurred!");
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const name = sessionStorage.getItem("name");
  return (
    <div className="h-screen text-center">
      <div className="flex flex-row justify-between items-stretch">
        <div className="ml-10 w-[100%]">
          <h1 className="text-4xl text-white font-bold text-left">
            {name.charAt(0).toUpperCase() + name.substring(1)}
          </h1>
          <hr className="text-white w-[90%] mt-2" />

          <div className="text-xl text-white font-bold mt-8 text-left">
            Sex: {data?.sex == 1 ? "Male" : "Female"}
          </div>

          <div className="text-md text-white mt-2 text-left">
            Your Last Report
          </div>

          <div className="grid grid-cols-2 mt-2 border-2 border-white rounded mr-5">
            <div className="grid grid-cols-2 border-r align-items-center border-b-2 border-gray-500 p-2">
              <div className="text-white text-left align-center">Age</div>
              <div className="text-gray-400 text-left">
                {data?.age ? data.age : ""}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 align-items-center border-b-2 border-gray-500 p-2">
              <div className="text-white text-left ">Chest Pain Type</div>
              <div className="text-gray-400 text-left">
                {data?.cp ? data.cp : ""}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 align-items-center border-r border-b-2 border-gray-500 p-2">
              <div className="text-white text-left ">
                Resting blood pressure
              </div>
              <div className="text-gray-400 text-left">
                {data?.trestbps ? data.trestbps : ""}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 align-items-center border-b-2 border-gray-500 p-2">
              <div className="text-white text-left">Cholestoral</div>
              <div className="text-gray-400 text-left">
                {data?.chol ? data.chol : ""}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 align-items-center border-r border-b-2 border-gray-500 p-2">
              <div className="text-white text-left">Fasting blood sugar</div>
              <div className="text-gray-400 text-left">
                {data?.fbs ? data.fbs : ""}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 align-items-center border-b-2 border-gray-500 p-2">
              <div className="text-white text-left">Resting ECG</div>
              <div className="text-gray-400 text-left">
                {data?.restecg ? data.restecg : ""}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 align-items-center border-r border-b-2 border-gray-500 p-2">
              <div className="text-white text-left">Max. Heart rate</div>
              <div className="text-gray-400 text-left">
                {data?.thalach ? data.thalach : ""}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 align-items-center border-b-2 border-gray-500 p-2">
              <div className="text-white text-left">Exercise induced pain</div>
              <div className="text-gray-400 text-left">
                {data?.exang ? data.exang : ""}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 align-items-center border-r border-b-2 border-gray-500 p-2">
              <div className="text-white text-left">Slope</div>
              <div className="text-gray-400 text-left">
                {data?.slope ? data.slope : ""}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 align-items-center border-b-2 border-gray-500 p-2">
              <div className="text-white text-left">CA</div>
              <div className="text-gray-400 text-left">
                {data?.ca ? data.ca : ""}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 align-items-center border-r border-b-2 border-gray-500 p-2">
              <div className="text-white text-left">Thalassemia</div>
              <div className="text-gray-400 text-left">
                {data?.thal ? data.thal : ""}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 align-items-center border-b-2 border-gray-500 p-2">
              <div className="text-white text-left">ST Depression</div>
              <div className="text-gray-400 text-left">
                {data?.oldpeak ? data.oldpeak : ""}
              </div>
            </div>
          </div>
        </div>
        <div className="mr-10 w-[100%] text-center">
          <div className="mt-5">
            <Graph />
          </div>
        </div>
      </div>
      <div className="mt-5 mx-auto">
        <NavLink to={"/assess"}>
          <div className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative z-20 flex items-center text-sm">
              <svg
                className="relative w-5 h-5 mr-2 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              Assess Your Heart
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
