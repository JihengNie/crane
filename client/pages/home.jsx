import React from 'react';
import Header from '../components/header.jsx';
import Carousel from 'react-bootstrap/Carousel';

export default function Home(props) {
  return (
    <div>
      <Header />
      <Carousel variant="dark">
        <Carousel.Item className='carousel-item-settings'>
          <img
            className="d-block w-100"
            src="/img/crane/c1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Crane 1</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item-settings'>
          <img
            className="d-block w-100"
            src="/img/crane/c2.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Crane 2</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item-settings'>
          <img
            className="d-block w-100"
            src="/img/placeholder.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>More cranes in the future</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
