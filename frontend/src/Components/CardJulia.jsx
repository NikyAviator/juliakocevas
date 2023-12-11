import React from 'react';
import '../scss/main.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImage from '../public/jsx-ui.png';

function CardJulia(props) {
  return (
    <>
      <Card style={{ width: '15rem' }}>
        <Card.Img variant='top' src={CardImage} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
            <p>CARD CONTAINER </p>
          </Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardJulia;
