import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';
import CardJulia from '../Components/CardJulia';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <CardJulia />
            <CardJulia />
            <CardJulia />
          </Col>
        </Row>
        <p>Home CONTAINER TEST</p>
      </Container>
    </>
  );
};

export default Home;
