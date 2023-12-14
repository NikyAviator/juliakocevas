import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import BasicCarousel from '../Components/BasicCarousel.jsx';
import Topside from '../Components/Topside.jsx';
const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Topside />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <BasicCarousel />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
