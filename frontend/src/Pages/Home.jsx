import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';
import CardJulia from '../Components/CardJulia';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ComponentImage from '../public/components.png';
import ConfingImage from '../public/config.png';
import JsxImage from '../public/jsx-ui.png';
import StateImg from '../public/state-mgmt.png';
const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <CardJulia title={'Title ppc1'} image={ConfingImage} />
          </Col>
          <Col>
            <CardJulia title={'Title ppc2'} image={JsxImage} />
          </Col>
          <Col>
            <CardJulia title={'Title ppc3'} image={StateImg} />
          </Col>
          <Col>
            <CardJulia title={'Title ppc4'} image={ComponentImage} />
          </Col>
        </Row>
        <p>Home CONTAINER TEST</p>
      </Container>
    </>
  );
};

export default Home;
