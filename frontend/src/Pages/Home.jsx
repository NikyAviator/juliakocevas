import '../scss/styles.scss';
import Container from 'react-bootstrap/Container';
import ArtGallery from '../Components/ArtGallery';

const Home = () => {
  return (
    <Container className='py-5'>
      <h1>Welcome to my digital artgallery</h1>

      <ArtGallery />
    </Container>
  );
};

export default Home;
