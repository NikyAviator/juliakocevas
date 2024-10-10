import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../scss/styles.scss';

function Aboutme() {
  const [imageUrl, setImageUrl] = useState(''); // State to store the fetched image URL
  const [error, setError] = useState(null); // State to store any error

  useEffect(() => {
    // Fetch a random image from the backend (replace '/api/media' with your specific API if needed)
    fetch('http://localhost:3001/api/media') // Ensure the correct backend URL
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        // Assuming data is an array of media files, pick the first image
        const images = data.filter(
          (file) => file.endsWith('0010.jpg') || file.endsWith('.png')
        );
        if (images.length > 0) {
          setImageUrl(images[0]); // Set the first image from the fetched data
        }
      })
      .catch((err) => {
        setError('Failed to load image');
        console.error('Error fetching image:', err);
      });
  }, []);

  return (
    <Container className='py-5'>
      <Row>
        <Col md={6}>
          <Card>
            {error && <p>{error}</p>} {/* Display error if any */}
            {imageUrl ? (
              <Card.Img
                className='aboutme-image'
                variant='top'
                src={imageUrl}
                alt='Julia Koceva'
              />
            ) : (
              <Card.Img variant='top' src='placeholder.jpg' alt='Placeholder' />
            )}
          </Card>
        </Col>
        <Col md={6}>
          <Card.Body>
            <Card.Title>About Julia Kocevas</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada. Curabitur consequat quam id libero pharetra, at
              consequat orci vulputate. Nulla facilisi. Quisque ac velit magna.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada. Curabitur consequat quam id libero pharetra, at
              consequat orci vulputate. Nulla facilisi. Quisque ac velit magna.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada. Curabitur consequat quam id libero pharetra, at
              consequat orci vulputate. Nulla facilisi. Quisque ac velit magna.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h1>ppc</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Aboutme;
