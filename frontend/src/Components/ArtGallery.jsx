import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ArtGallery = () => {
  const [mediaFiles, setMediaFiles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/media') // Ensure correct backend URL
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Fetched media files:', data); // Log the response to verify
        setMediaFiles(data); // Set media files state
      })
      .catch((err) => console.error('Error fetching media files:', err));
  }, []);

  return (
    <Container className='art-gallery'>
      <Row>
        {mediaFiles.map((file, index) => {
          const isImage = file.endsWith('.jpg') || file.endsWith('.png');
          const isVideo = file.endsWith('.mp4');

          return (
            <Col key={index} md={4} className='mb-4'>
              <div className='media-item'>
                {isImage && (
                  <img
                    src={file}
                    alt={`Artwork ${index}`}
                    className='img-fluid'
                  />
                )}
                {isVideo && (
                  <video width='100%' height='auto' controls>
                    <source src={file} type='video/mp4' />
                    Your browser does not support the video tag.
                  </video>
                )}
                <p>{file}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ArtGallery;
