import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { backendUrl } from "../utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

//y axis scale from 0 to 100
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },

    title: {
      display: true,
      text:
        sessionStorage.getItem("name")?.toUpperCase() +
        "'s Heart Disease Risk History",
    },
  },
  scales: {
    y: {
      min: 0,
      max: 100,
    },
  },
};

export default function Graph() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const formData = {
      mobile: sessionStorage.getItem("mobile"),
    };
    try {
      let res = await axios.post(`${backendUrl}/gethistory`, formData);
      if (res.data) {
        // console.log(res.data);
        // const dates = res.data.RESULT.map((item) => item.dates.substring(8,10) + '/' + item.dates.substring(5,7) + '/' + item.dates.substring(0,4));
        let dates = res.data.RESULT.map((item) => {
          const other = { ...item };
          delete other.date;
          delete other.result;
          return {
            dates: new Date(item.date),
            result: item.result * 100,
            ...other,
          };
        });
        dates.sort((a, b) => a.dates - b.dates);
        dates = dates.map((item) => {
          return {
            dates: item.dates.toLocaleDateString(),
            result: item.result,
            age: item.age,
            ca: item.ca,
            chol: item.chol,
            cp: item.cp,
            exang: item.exang,
            fbs: item.fbs,
            oldpeak: item.oldpeak,
            restecg: item.restecg,
            slope: item.slope,
            thal: item.thal,
            thalach: item.thalach,
            trestbps: item.trestbps,
          };
        });
        // console.log(dates);

        setData(dates);
      } else {
        toast.error("Some Error Occurred!");
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  const dataSchema = {
    labels: data.map((item) => item.dates),
    datasets: [
      {
        label: "Heart Disease Risk (%)",
        data: data.map((item) => item.result),
        borderColor: "#f25c70",
        backgroundColor: "#f25c70",
      },
    ],
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-[800px]">
      <Line
        className="bg-blue-gradient rounded-lg p-4"
        options={options}
        data={dataSchema}
      />
    </div>
  );
}
