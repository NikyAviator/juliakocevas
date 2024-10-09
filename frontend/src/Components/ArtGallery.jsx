import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState, useEffect } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';
const ArtGallery = () => {
  const [mediaFiles, setMediaFiles] = useState([]);

  useEffect(() => {
    fetch('/api/media')
      .then((res) => res.json())
      .then((data) => {
        setMediaFiles(data);
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
                  <img src={`/${file}`} alt={file} className='img-fluid' />
                )}
                {isVideo && (
                  <video width='100%' height='auto' controls>
                    <source src={`/${file}`} type='video/mp4' />
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
