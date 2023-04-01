import styles from "../style";
import Button from "./Button";

const tryThese = () => (
  <>
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Check Your Risk for Heart Disease</h2>
        <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
          Predicting the Risk for Developing Heart Disease has been Made Easy
          Just for You. Find Your Risk Score in just a Few Clicks.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>

    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Let’s Improve your Diet!</h2>
        <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
          Everything you need to know about your Diet to have the Healthiest
          Heart.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>

    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Get the Best Recommended Doctors</h2>
        <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
          No Need to Spend Time Looking for the Best Doctor. You will get the
          Highest Quality Care and Support from the Doctors that we Recommend
          for You.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  </>
);

export default tryThese;
