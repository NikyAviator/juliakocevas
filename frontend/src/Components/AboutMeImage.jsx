/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const AboutMeImage = ({ imageUrl, error }) => {
  return (
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
  );
};

// PropTypes for the component
Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default AboutMeImage;
