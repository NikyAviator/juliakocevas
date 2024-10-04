import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageAndTextCard from './ImageAndTextCard';
import { useState, useEffect } from 'react';

const ArtGallery = () => {
  const [artworks, setArtworks] = useState([]);
  const [page, setPage] = useState(1);

  // Fetch data from the API
  useEffect(() => {
    fetchArtworks(page);
  }, [page]);

  const fetchArtworks = async (page) => {
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=6`
      );
      const data = await response.json();

      const newArtworks = data.map((item) => ({
        imageUrl: item.download_url,
        text: item.author,
      }));

      setArtworks([...artworks, ...newArtworks]);

      setPage(page + 1);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

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
