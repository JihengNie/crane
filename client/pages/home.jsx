import React from 'react';
import Header from '../components/header';
import Carousel from 'react-bootstrap/Carousel';

export default function Home(props) {
  return (
    <div>
      <Header />
      <Carousel variant="dark">
        <Carousel.Item>
          <div className='carousel-item-settings'>
            <img
            className="d-block w-100"
            src="/img/crane/c1.png"
            alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className='carousel-item-settings'>
            <img
            className="d-block w-100"
            src="/img/crane/c2.png"
            alt="Second slide"
          />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel-item-settings'>
            <img
            className="d-block w-100"
            src="/img/placeholder.png"
            alt="Third slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
