/* eslint-disable react/prop-types */
import '../scss/styles.scss';
import Col from 'react-bootstrap/esm/Col';
const Image = (props) => {
  const { file, index, handleClick } = props;
  const isImage = file.endsWith('.jpg') || file.endsWith('.png');
  const isVideo = file.endsWith('.mp4');

  return (
    <Col key={index} md={4} className='mb-4'>
      <div className='media-item' onClick={() => handleClick(file)}>
        {isImage && (
          <img src={file} alt={`Artwork ${index}`} className='img-fluid' />
        )}
        {isVideo && (
          <video width='100%' height='auto' controls>
            <source src={file} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </Col>
  );
};

export default Image;
