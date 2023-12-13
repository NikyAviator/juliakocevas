import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';
import CardJulia from '../Components/CardJulia';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { CORE_CONCEPTS } from '../data.js';
import BasicCarousel from '../Components/BasicCarousel.jsx';
const Home = () => {
  return (
    <>
      <Container>
        <Row className='row row-cols-2 row-cols-lg-4 g-3 m-1'>
          {/* {CORE_CONCEPTS.map((conceptItem) => {
            return <CardJulia key={conceptItem.title} {...conceptItem} />;
          })} */}
          <Col>
            <CardJulia
              title={CORE_CONCEPTS[0].title}
              image={CORE_CONCEPTS[0].image}
              description={CORE_CONCEPTS[0].description}
            />
          </Col>
          <Col>
            <CardJulia {...CORE_CONCEPTS[1]} />
          </Col>
          <Col>
            <CardJulia {...CORE_CONCEPTS[2]} />
          </Col>
          <Col>
            <CardJulia {...CORE_CONCEPTS[3]} />
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
