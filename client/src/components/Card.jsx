import Carousel from 'react-bootstrap/Carousel';
import { feature1, dietimg, doctors } from '../assets';
import 'bootstrap/dist/css/bootstrap.css';
  
function IndividualIntervalsExample() {
  return (
 
    <Carousel variant="dark" >
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-[100%] h-[600px] rounded-3xl"
          src={feature1} 
          alt="First slide"
          />
        <Carousel.Caption>
          <p className='text-[28px] font-semibold bg-white rounded'>Find your risk of Developing a Heart Disease</p>
          <p className='text-[18px] font-semibold bg-white rounded'>By Only filling a few details about yourself we will help you find how your heart health is!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img
          className="d-block w-[100%] h-[600px] rounded-3xl"
          src={dietimg} 
          alt="First slide"
        />
        <Carousel.Caption>
          <p className='text-[28px] font-semibold bg-white rounded'>You Are what You Eat!</p>
          <p className='text-[18px] font-semibold bg-white rounded'>We will Educate You on Your Heart's Needs. Learn what Stops Your Heart from being Healthy and Improve Your Diet accordingly.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img
          className="d-block w-[100%] h-[600px] rounded-3xl"
          src={doctors} 
          alt="First slide"
          />
        <Carousel.Caption>
          <p className='text-[28px] font-semibold bg-white rounded'>Get the Best Doctors for You</p>
          <p className='text-[18px] font-semibold bg-white rounded'>We Strive to make You Achieve the Highest Quality Care and Support. We Recommend the Best Cardiologists for Your Treatment!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;