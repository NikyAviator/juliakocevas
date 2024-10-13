import '../scss/styles.scss';
import Button from 'react-bootstrap/Button';
import { FaTiktok } from 'react-icons/fa';

const TikTokButton = () => {
  return (
    <Button
      href='https://www.tiktok.com/juliakocevas'
      target='_blank'
      rel='noopener noreferrer'
      className='social-button my-1 my-4'
      variant='dark'
      size='lg'
    >
      <FaTiktok className='mr-2' /> TikTok
    </Button>
  );
};

export default TikTokButton;
