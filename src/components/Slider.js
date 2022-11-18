import Carousel from 'react-bootstrap/Carousel';
import metazord from '../assets/rf.mp4'
import logo from '../assets/Logo.png'

function Slider() {
  return (
    <Carousel variant="dark" className="carousel">
      <Carousel.Item interval={1000}>
        <video height="720" loop controls>
            <source src={metazord} type="video/mp4" />
        </video>
      </Carousel.Item>
      <Carousel.Item interval={500}>
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
          src={logo}
          width="400"
          height="700"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;