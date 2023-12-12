import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';
import CardJulia from '../Components/CardJulia';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { CORE_CONCEPTS } from '../data.js';
const Home = () => {
  return (
    <>
      <Container>
        <Row className='row row-cols-2 row-cols-lg-4 g-3 m-1'>
          <Col>
            <CardJulia
              title={CORE_CONCEPTS[0].title}
              image={CORE_CONCEPTS[0].image}
              description={CORE_CONCEPTS[0].description}
            />
          </Col>
          <Col>
            <CardJulia
              title={CORE_CONCEPTS[1].title}
              image={CORE_CONCEPTS[1].image}
              description={CORE_CONCEPTS[1].description}
            />
          </Col>
          <Col>
            <CardJulia
              title={CORE_CONCEPTS[2].title}
              image={CORE_CONCEPTS[2].image}
              description={CORE_CONCEPTS[2].description}
            />
          </Col>
          <Col>
            <CardJulia
              title={CORE_CONCEPTS[3].title}
              image={CORE_CONCEPTS[3].image}
              description={CORE_CONCEPTS[3].description}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p> CAROUSEL HÄR:</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
