import { useDispatch, useSelector } from "react-redux";
import { FieldContainer } from "../components";
import {
  setAge,
  setSex,
  setCp,
  setTrestbps,
  setFbs,
  setChol,
  setRestecg,
  setThalach,
  setExang,
  setOldpeak,
  setSlope,
  setThal,
  setCa,
} from "../redux/infoSlice";

import "../stylesheets/HomePage.css";

const HomePage = () => {
  const {
    sex,
    age,
    cp,
    trestbps,
    fbs,
    chol,
    restecg,
    thalach,
    exang,
    oldpeak,
    slope,
    thal,
    ca,
  } = useSelector((store) => store.info);
  const dispatch = useDispatch();

  return (
    <div id="homePage" className="m-0 p-0 h-[100vh] w-[100vw]">
      <div
        className={`font-poppins font-bold cursor-pointer text-[20px] text-gradient ml-1 text-center mt-1 mb-3`}
      >
        Enter your Details
      </div>
      <div className="glassContainer card my-auto mx-auto w-[85vw]">
        <div className="card-body text-center my-auto mt-0 mt-sm-2">
          <form>
            <div className="mb-4 infoContainer row">
              <FieldContainer
                colSize="4"
                type="input"
                label="Age (in years)"
                name="age"
                val={age}
                func={setAge}
              />
              <FieldContainer
                colSize="4"
                type="select"
                label="Sex"
                name="sex"
                val={sex}
                func={setSex}
                options={[
                  { value: 1, label: "Male" },
                  { value: 0, label: "Female" },
                ]}
              />
              <FieldContainer
                colSize="4"
                type="select"
                label="Chest Pain Type"
                name="cp"
                val={cp}
                func={setCp}
                options={[
                  { value: 0, label: "Typical Angina" },
                  { value: 1, label: "Atypical Angina" },
                  { value: 2, label: "Non-anginal pain" },
                  { value: 3, label: "Asymptomatic pain" },
                ]}
              />
            </div>
            <div className="mb-4 infoContainer row">
              <FieldContainer
                colSize="4"
                type="input"
                label="Resting Blood Pressure (mm)"
                name="trestbps"
                val={trestbps}
                func={setTrestbps}
              />
              <FieldContainer
                colSize="8"
                type="select"
                label="Is your Fasting Blood Sugar > 120mg/dl ?"
                name="fbs"
                val={fbs}
                func={setFbs}
                options={[
                  { value: 1, label: "True" },
                  { value: 0, label: "False" },
                ]}
              />
            </div>
            <div className="mb-4 infoContainer row">
              <FieldContainer
                colSize="4"
                type="input"
                label="Serum Cholestrol (mg/dl)"
                name="chol"
                val={chol}
                func={setChol}
              />
              <FieldContainer
                colSize="4"
                type="select"
                label="Resting Electrocardiographic Results"
                name="restecg"
                val={restecg}
                func={setRestecg}
                options={[
                  { value: 0, label: "Normal" },
                  { value: 1, label: "ST-T Wave Abnormality" },
                ]}
              />
              <FieldContainer
                colSize="4"
                type="input"
                label="Maximum Heartrate"
                name="thalach"
                val={thalach}
                func={setThalach}
              />
            </div>
            <div className="mb-4 infoContainer row">
              <FieldContainer
                colSize="4"
                type="select"
                label="Does Exercise Induce Chest Pain?"
                name="exang"
                val={exang}
                func={setExang}
                options={[
                  { value: 1, label: "Yes" },
                  { value: 0, label: "No" },
                ]}
              />
              <FieldContainer
                colSize="4"
                type="input"
                label="ST Depression induced by exercise (mm)"
                name="oldpeak"
                val={oldpeak}
                func={setOldpeak}
              />
              <FieldContainer
                colSize="4"
                type="select"
                label="Slope of Peak Exercise ST segment"
                name="slope"
                val={slope}
                func={setSlope}
                options={[
                  { value: 0, label: "Upsloping" },
                  { value: 1, label: "Flat" },
                  { value: 2, label: "Downsloping" },
                ]}
              />
            </div>
            <div className="mb-4 infoContainer row">
              <FieldContainer
                colSize="4"
                type="select"
                label="Defect"
                name="thal"
                val={thal}
                func={setThal}
                options={[
                  { value: 1, label: "1" },
                  { value: 2, label: "2" },
                  { value: 3, label: "3" },
                ]}
              />
              <FieldContainer
                colSize="8"
                type="select"
                label="No. of major vessels (0-3) colored by Flourosopy"
                name="ca"
                val={ca}
                func={setCa}
                options={[
                  { value: 0, label: "0" },
                  { value: 1, label: "1" },
                  { value: 2, label: "2" },
                  { value: 3, label: "3" },
                  { value: 4, label: "4" },
                ]}
              />
            </div>
            <button
              className="btn btn-info btn-block shadow-2 my-3 w-75"
              style={{
                background: "rgba(13,202,240,0.38699229691876746)",
              }}
            >
              Compute
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
