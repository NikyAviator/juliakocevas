import React from 'react';
import BasicCarousel from '../Components/BasicCarousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../scss/main.scss';
import happyDog from '../public/happy-dog.png';
const About = () => {
  return (
    <Container>
      <Row>
        <Col md={6} className='d-flex align-items-center'>
          <div>
            <h2>About Julia</h2>
            <p>Here's a paragraph about Julia...</p>
            {/* Add more content as needed */}
          </div>
        </Col>
        <Col
          md={6}
          className='d-flex justify-content-center align-items-center'
        >
          <Image src={happyDog} alt='Julia' fluid />
        </Col>
      </Row>
      <Row>
        <Col>
          <BasicCarousel />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
