import React from 'react';
import './Bennar.css'
import bennar1 from '../../../images/bennar/bennar1.jpg';
import bennar2 from '../../../images/bennar/bennar2.jpg';
import bennar3 from '../../../images/bennar/bennar3.jpg';
import { Carousel } from 'react-bootstrap';

const Bennar = () => {
    return (
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bennar1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Hannah</h3>
            <p>Beautiful Wedding Quotes to Celebrate Love and Partnership.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bennar2}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Engage Time</h3>
            <p>Beautiful Wedding Quotes to Celebrate Love and Partnership.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bennar3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Happy Hour</h3>
            <p>Beautiful Wedding Quotes to Celebrate Love and Partnership.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Bennar;