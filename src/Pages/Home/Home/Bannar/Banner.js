import { useState } from "react";
import { Carousel } from "react-bootstrap";
import image1 from '../../../../image/image-3.jpg';
import image2 from '../../../../image/image-4.jpg'
import image3 from '../../../../image/image-5.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}min-height='300px'
          alt="First slide"
        />
        <Carousel.Caption className="mb-5">
          <h3>If animals live, we will live</h3>
          <p>We all love animals. And we should all protect animals</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={image2} min-height='300px'
          alt="Second slide"
        />

        <Carousel.Caption className="mb-5">
          <h3>My hobby is photography</h3>
          <p>We all love animals. And we should all protect animals.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}  min-height='300px'
          alt="Third slide"
        />

        <Carousel.Caption className="mb-5">
          <h3>My hobby is photography</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Banner;