import '../scss/styles.scss';
import Button from 'react-bootstrap/Button';
import { FaInstagram } from 'react-icons/fa';

const InstagramButton = () => {
  return (
    <Button
      href='https://www.instagram.com/juliakocevas'
      target='_blank'
      rel='noopener noreferrer'
      className='social-button instagram-button my-1 my-2'
      variant='primary'
      size='lg'
    >
      <FaInstagram className='mr-2' /> Instagram
    </Button>
  );
};

export default InstagramButton;
