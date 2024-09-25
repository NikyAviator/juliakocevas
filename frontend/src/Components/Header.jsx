import '../scss/styles.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar bg='secondary' expand='lg' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>JuliaKocevas</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
