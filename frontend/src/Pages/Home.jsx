import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';
import CardJulia from '../Components/CardJulia';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Carousel } from 'bootstrap';

import componentsImg from '../public/components.png';
import propsImg from '../public/config.png';
import jsxImg from '../public/jsx-ui.png';
import stateImg from '../public/state-mgmt.png';
import datajs from '../data.js';
const Home = () => {
  return (
    <>
      <Container>
        <Row className='row row-cols-2 row-cols-lg-4 my-4'>
          <Col>
            <CardJulia title={'Title ppc1'} image={componentsImg} description={datajs. } />
          </Col>
          <Col>
            <CardJulia title={'Title ppc2'} image={propsImg} />
          </Col>
          <Col>
            <CardJulia title={'Title ppc3'} image={jsxImg} />
          </Col>
          <Col>
            <CardJulia title={'Title ppc4'} image={stateImg} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p> Hello</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
