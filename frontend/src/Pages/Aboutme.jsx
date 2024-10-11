import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../scss/styles.scss';
import AboutMeImage from '../Components/AboutMeImage';
import Button from 'react-bootstrap/Button';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

function Aboutme() {
  const [imageUrl, setImageUrl] = useState(''); // State to store the fetched image URL
  // const [videoUrl, setVideoUrl] = useState(''); // State to store the fetched video URL
  const [error, setError] = useState(null); // State to store any error

  useEffect(() => {
    // Fetch images and videos from the backend
    fetch('http://localhost:3001/api/media') // Ensure the correct backend URL
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        // Filter for images and videos from the media files
        const images = data.filter(
          (file) => file.endsWith('0010.jpg') || file.endsWith('.png')
        );
        // const videos = data.filter((file) => file.endsWith('.mp4'));

        // Set the first image and video from the fetched data
        if (images.length > 0) {
          setImageUrl(images[0]);
        }
        // if (videos.length > 0) {
        //   setVideoUrl(videos[0]);
        // }
      })
      .catch((err) => {
        setError('Failed to load media');
        console.error('Error fetching media:', err);
      });
  }, []);

  return (
    <Container className='py-5'>
      <Row>
        <Col md={6}>
          <AboutMeImage imageUrl={imageUrl} error={error} />
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

          <Card.Text className='my-5'>
            Hello! If you like what you see, you can follow me on:
          </Card.Text>
          {/* Social Media Buttons */}
          <div className='my-5 mt-4'>
            <Button
              href='https://www.instagram.com/juliakocevas'
              target='_blank'
              rel='noopener noreferrer'
              className='social-button my-1'
              variant='primary'
              size='lg'
            >
              <FaInstagram className='mr-2' /> Instagram
            </Button>
            <Button
              href='https://www.tiktok.com/juliakocevas'
              target='_blank'
              rel='noopener noreferrer'
              className='social-button'
              variant='dark'
              size='lg'
            >
              <FaTiktok className='mr-2' /> TikTok
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Aboutme;
