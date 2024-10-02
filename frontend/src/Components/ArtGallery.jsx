import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageAndTextCard from './ImageAndTextCard';

const ArtGallery = () => {
  const artworks = [
    {
      imageUrl: 'https://example.com/art1.jpg',
      text: 'Beautiful landscape artwork by Julia Kocevas.',
    },
    {
      imageUrl: 'https://example.com/art2.jpg',
      text: 'A creative abstract painting.',
    },
    {
      imageUrl: 'https://example.com/art3.jpg',
      text: 'A serene beach view.',
    },
  ];

  return (
    <Container>
      <Row>
        {artworks.map((art, index) => (
          <Col key={index} md={4}>
            <ImageAndTextCard imageUrl={art.imageUrl} text={art.text} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ArtGallery;
