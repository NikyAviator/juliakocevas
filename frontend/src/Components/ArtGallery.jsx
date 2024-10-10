import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../scss/styles.scss';

const ArtGallery = () => {
  const [mediaFiles, setMediaFiles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');

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

  // Function to handle when an image or video is clicked
  const handleClick = (file) => {
    setSelectedFile(file);
    setShowModal(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setShowModal(false);
    setSelectedFile(null); // Reset the selected file when closing the modal
  };

  return (
    <Container className='art-gallery'>
      <Row>
        {mediaFiles.map((file, index) => {
          const isImage = file.endsWith('.jpg') || file.endsWith('.png');
          const isVideo = file.endsWith('.mp4');

          return (
            <Col key={index} md={4} className='mb-4'>
              <div className='media-item' onClick={() => handleClick(file)}>
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

      {/* Modal to display the selected image or video */}
      {selectedFile && (
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Body>
            {selectedFile.endsWith('.jpg') || selectedFile.endsWith('.png') ? (
              <img
                src={selectedFile}
                alt='Selected Artwork'
                className='img-fluid'
              />
            ) : selectedFile.endsWith('.mp4') ? (
              <video width='100%' height='auto' controls>
                <source src={selectedFile} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            ) : null}
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default ArtGallery;
