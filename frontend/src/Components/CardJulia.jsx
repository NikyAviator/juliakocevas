import React from 'react';
import '../scss/main.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardJulia({
  title = 'Default Title',
  image,
  description = 'Default description',
  buttonText = 'View More',
}) {
  return (
    <Card>
      <Card.Img variant='top' src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant='warning'>{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}
export default CardJulia;
