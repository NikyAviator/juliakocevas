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
import { CORE_CONCEPTS } from '../data.js';
const Home = () => {
  return (
    <>
      <Container>
        <Row className='row row-cols-2 row-cols-lg-4 my-4'>
          <Col>
            <CardJulia
              title={CORE_CONCEPTS[0].title}
              image={componentsImg}
              description={CORE_CONCEPTS[0].description}
            />
          </Col>
          <Col>
            <CardJulia
              title={CORE_CONCEPTS[1].title}
              image={propsImg}
              description={CORE_CONCEPTS[1].description}
            />
          </Col>
          <Col>
            <CardJulia
              title={CORE_CONCEPTS[2].title}
              image={jsxImg}
              description={CORE_CONCEPTS[2].description}
            />
          </Col>
          <Col>
            <CardJulia
              title={CORE_CONCEPTS[3].title}
              image={stateImg}
              description={CORE_CONCEPTS[3].description}
            />
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
