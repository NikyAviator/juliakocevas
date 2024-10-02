import '../scss/styles.scss';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const ImageAndTextCard = ({ imageUrl, text }) => {
  return (
    <Card className='mb-4'>
      <Card.Img variant='top' src={imageUrl} alt='Artwork' />
      <Card.Body>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

// PropTypes to define expected props
ImageAndTextCard.propTypes = {
  imageUrl: PropTypes.string.isRequired, // The URL for the image
  text: PropTypes.string.isRequired, // The text description of the card
};

export default ImageAndTextCard;
