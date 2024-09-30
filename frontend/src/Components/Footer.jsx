import '../scss/styles.scss';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

/* 
added target='_blank' to open the link in a new tab, and rel='noopener noreferrer' for security reasons. 
The className='text-white mx-2' is used to make the icons white and add some horizontal margin around them.

*/

const Footer = () => {
  return (
    <footer className='custom-footer-bgcolor'>
      <div className='container py-1 d-flex justify-content-center'>
        <div>
          <a
            href='https://www.instagram.com/juliakocevas'
            target='_blank'
            rel='noopener noreferrer'
            className='dark-icon mx-2'
          >
            <FaInstagram size='2em' />
          </a>
          <a
            href='https://www.tiktok.com/juliakocevas'
            target='_blank'
            rel='noopener noreferrer'
            className='dark-icon mx-2'
          >
            <FaTiktok size='2em' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
