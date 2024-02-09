import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';
import CardJulia from '../Components/CardJulia';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InstagramCard from './IntragramCard.jsx';
import { CORE_CONCEPTS } from '../data.js';

const Topside2 = (props) => {
  return (
    <Container>
      <Row className='row row-cols-2 row-cols-lg-4 g-3 m-1'>
        {CORE_CONCEPTS.map((conceptItem) => (
          <Col key={conceptItem.title}>
            <CardJulia {...conceptItem} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <InstagramCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Topside2;
