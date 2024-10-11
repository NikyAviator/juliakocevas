import '../scss/styles.scss';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from './Image';
import ModalImage from './ModalImage';
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
    <Container className='art-gallery py-5'>
      <Row>
        {mediaFiles.map((file, index) => {
          return (
            <Image
              key={index}
              file={file}
              index={index}
              handleClick={handleClick}
            />
          );
        })}
      </Row>
      {/* Pass modal logic to ModalImage */}
      {selectedFile && (
        <ModalImage
          file={selectedFile}
          showModal={showModal}
          handleClose={handleClose}
        />
      )}
    </Container>
  );
};

export default ArtGallery;
