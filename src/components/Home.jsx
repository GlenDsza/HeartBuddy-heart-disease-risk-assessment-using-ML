import styles from '../style';
import { healthcare, stethoscope } from '../assets';
import GetStarted from './GetStarted';

const Home = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}
  flex-col xl:px-0 sm:px-16 px-6`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={healthcare} alt="healthcare"
          className='w-[22px] h-[22px]' />
        <p className={`${styles.paragraph} ml-3`}>
        Your{' '}
          <span className='text-white'>Heart</span> Deserves the <span className='text-white'>Best!</span>
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Check your <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Heart Disease Risk</span>{" "}Today.
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      {/* <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        Today.
      </h1> */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Your Heart Health Matters. Prevent Heart Disease Before It Strikes. Take a Risk Assessment Test and Find your Risk of Developing Heart Disease in just a Few Clicks.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={stethoscope} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      {/* gradient end */}
    </div>


{/* For mobile devices */}
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
)


export default Home