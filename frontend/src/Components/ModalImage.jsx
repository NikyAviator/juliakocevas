/* eslint-disable react/prop-types */
import '../scss/styles.scss';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalImage = ({ file, showModal, handleClose }) => {
  const isImage = file.endsWith('.jpg') || file.endsWith('.png');
  const isVideo = file.endsWith('.mp4');

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Body>
        {isImage ? (
          <img src={file} alt='Selected Artwork' className='img-fluid' />
        ) : isVideo ? (
          <video width='100%' height='auto' controls>
            <source src={file} type='video/mp4' />
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
  );
};

export default ModalImage;
