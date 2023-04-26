import React from "react";
import styles from "../style";
import { Home, Card, TryThese } from "../components";
import "bootstrap/dist/css/bootstrap.css";

const LandingPage = () => {
  return (
    <>
      {/* 
    <div>
      <Button1/>
    </div> */}
      <div className={`bg-darkBlue ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>
      <div className={` ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`container`} id="features">
          <Card />
        </div>
      </div>

      <div className={` ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <TryThese />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
