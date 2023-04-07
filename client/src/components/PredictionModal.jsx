import { Modal } from "react-bootstrap";
import ReactSpeedometer from "react-d3-speedometer/slim";

const PredictionModal = ({ isShow, percentage, toggleModal }) => {
  return (
    <Modal
      show={isShow}
      aria-labelledby="predictionModal"
      centered
      keyboard="false"
    >
      <Modal.Body>
        <div className="container height-100 d-flex justify-content-center align-items-center min-h-[200px]">
          {" "}
          <div className="position-relative w-100">
            {" "}
            <div className="text-centered">
              <div
                className={`font-poppins font-bold text-[20px] text-center mb-3`}
              >
                ⚠️ Risk Assessment ⚠️
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
            <div className="card-2">
              <div className="d-flex justify-center mt-3 pb-2 h-[200px]">
                <ReactSpeedometer
                  minValue={0}
                  maxValue={100}
                  value={percentage}
                  startColor="#0DA42B"
                  endColor="#D8320D"
                  maxSegmentLabels={4}
                  segments={1000}
                  needleHeightRatio={0.7}
                  needleColor="steelblue"
                  needleTransitionDuration={2000}
                  needleTransition="easeElastic"
                  valueTextFontSize="0px"
                />
              </div>
              <div className="text-center">
                <span
                  className={`font-poppins font-bold text-[20px] text-center mb-3`}
                >
                  Heart Disease Risk = &nbsp;
                </span>
                <span
                  className={`font-poppins font-bold text-[20px] text-center mb-3 ${
                    percentage > 0 && percentage < 25
                      ? "text-[#0DA42B]"
                      : percentage >= 25 && percentage < 50
                      ? "text-[#9EE909]"
                      : percentage >= 50 && percentage < 75
                      ? "text-[#E98A09]"
                      : "text-[#DF3D05]"
                  }`}
                >
                  {percentage}%
                </span>
              </div>
            </div>{" "}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PredictionModal;
