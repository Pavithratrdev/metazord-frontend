import {Carousel,Ratio} from 'react-bootstrap';
import metazord from '../assets/rf.mp4'
import logo from '../assets/Logo.png'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'


function Slider() {
  return (
    <Carousel variant="dark" className="carousel">
      <Carousel.Item>
        <video height="720" loop controls play>
            <source src={metazord} type="video/mp4" />
        </video>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          width="400"
          height="700"
          src={logo}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          width="400"
          height="700"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          width="400"
          height="700"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          width="400"
          height="700"
          alt="Third slide"
        />
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Slider;