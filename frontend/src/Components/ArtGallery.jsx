import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { mediaFiles } from '../../public';
import { useState, useEffect } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';

const ArtGallery = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className='art-gallery'>
            {mediaFiles.map((file, index) => {
              const isImage = file.endsWith('.jpg') || file.endsWith('.png');
              const isVideo = file.endsWith('.mp4');
              return (
                <div key={index} className='media-item'>
                  {isImage && <img src={`/${file}`} alt={file} />}
                  {isVideo && (
                    <video width='320' height='240' controls>
                      <source src={`/${file}`} type='video/mp4' />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  <p>{file}</p>
                </div>
              );
            })}
          </div>{' '}
        </Col>
      </Row>
    </Container>
  );
};

export default ArtGallery;
