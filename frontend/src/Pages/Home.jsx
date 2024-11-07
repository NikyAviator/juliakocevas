import '../scss/styles.scss';
import Container from 'react-bootstrap/Container';
import ArtGallery from '../Components/ArtGallery';

const Home = () => {
  return (
    <Container className='py-5'>
      <h1 id='h1'>Welcome!</h1>

      <ArtGallery />
    </Container>
  );
};

export default Home;
