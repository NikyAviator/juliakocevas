import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    <Container>
      <Row className='justify-content-center'>
        <Col md={6}>
          <Card>
            {error && <p>{error}</p>} {/* Display error if any */}
            {imageUrl ? (
              <Card.Img variant='top' src={imageUrl} alt='My Sister' />
            ) : (
              <Card.Img variant='top' src='placeholder.jpg' alt='Placeholder' />
            )}
            <Card.Body>
              <Card.Title>About Julia Kocevas</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
                malesuada. Curabitur consequat quam id libero pharetra, at
                consequat orci vulputate. Nulla facilisi. Quisque ac velit
                magna.
              </Card.Text>
              <Button variant='primary' href='/gallery'>
                See Gallery
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Aboutme;
