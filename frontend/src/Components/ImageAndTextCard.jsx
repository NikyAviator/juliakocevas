import '../scss/styles.scss';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

// Lägg till text endast om det behövs
const ImageAndTextCard = ({ imageUrl }) => {
  return (
    <Card className='mb-4'>
      <Card.Img variant='top' src={imageUrl} alt='Artwork' />
    </Card>
  );
};

// PropTypes to define expected props
ImageAndTextCard.propTypes = {
  imageUrl: PropTypes.string.isRequired, // The URL for the image
  //text: PropTypes.string.isRequired, // The text description of the card
};

export default ImageAndTextCard;
