import '../scss/styles.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <Navbar expand='lg' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>JuliaKocevas</Navbar.Brand>
        <Nav.Link className='aboutme-link' href='/aboutme'>
          About Me
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default Header;
