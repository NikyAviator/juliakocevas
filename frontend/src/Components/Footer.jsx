import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

/* 
added target='_blank' to open the link in a new tab, and rel='noopener noreferrer' for security reasons. 
The className='text-white mx-2' is used to make the icons white and add some horizontal margin around them.

*/

const Footer = () => {
  return (
    <footer className='bg-dark text-white'>
      <div className='container py-1 d-flex justify-content-center'>
        <div>
          <a
            href='https://www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white mx-2'
          >
            <FaFacebook size='1em' />
          </a>
          <a
            href='https://www.instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white mx-2'
          >
            <FaInstagram size='1em' />
          </a>
          <a
            href='https://www.tiktok.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white mx-2'
          >
            <FaTiktok size='1em' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
