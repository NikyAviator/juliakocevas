import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';
import CardJulia from '../Components/CardJulia';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import componentsImg from '../public/components.png';
import propsImg from '../public/config.png';
import jsxImg from '../public/jsx-ui.png';
import stateImg from '../public/state-mgmt.png';

const Home = () => {
  return (
    <>
      <Container>
        <Row className='my-4'>
          <Col xs={3}>
            <CardJulia title={'Title ppc1'} image={componentsImg} />
          </Col>
          <Col xs={3}>
            <CardJulia title={'Title ppc2'} image={propsImg} />
          </Col>
          <Col xs={3}>
            <CardJulia title={'Title ppc3'} image={jsxImg} />
          </Col>
          <Col xs={3}>
            <CardJulia title={'Title ppc4'} image={stateImg} />
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <CardJulia title={'Title ppc1'} image={componentsImg} />
          </Col>
          <Col xs={3}>
            <CardJulia title={'Title ppc2'} image={propsImg} />
          </Col>
          <Col xs={3}>
            <CardJulia title={'Title ppc3'} image={jsxImg} />
          </Col>
          <Col xs={3}>
            <CardJulia title={'Title ppc4'} image={stateImg} />
          </Col>
        </Row>
      </Container>
      <Container></Container>
    </>
  );
};

export default Home;
