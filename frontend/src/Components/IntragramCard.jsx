import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const InstagramCard = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Instagram Video</Card.Title>
        <Card.Text>Check out this cool video!</Card.Text>
        {/* Embed Instagram Video */}
        <iframe
          src='ppc'
          width='100%'
          height='auto'
          frameborder='0'
          allowtransparency='true'
          allow='encrypted-media'
          scrolling='no'
        ></iframe>
      </Card.Body>
    </Card>
  );
};

export default InstagramCard;
