import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import BasicCarousel from '../Components/BasicCarousel.jsx';
import Topside from '../Components/Topside.jsx';
import Topside2 from '../Components/Topside2.jsx';
const Home = () => {
  return (
    <>
      <Container>
        <Row className='my-3'>
          <Col>
            <Topside2 />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className='my-4'>
          <Col>
            <BasicCarousel />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
