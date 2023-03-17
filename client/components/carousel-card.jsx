import React from 'react';
import { Card } from 'react-bootstrap';

export default class CarouselCard extends React.Component {
  render() {
    return (
      <Card className='carousel-card-style '>
        <Card.Img variant="top" src={this.props.src} />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
