import React from 'react';
import '../scss/main.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function CardJulia(props) {
  return (
    <>
      <Card>
        <Card.Img variant='top' src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            <p>{props.description}</p>
          </Card.Text>
          <Button variant='warning'>Go somewhere/ view content</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardJulia;
