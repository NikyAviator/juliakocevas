import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-secondary text-white'>
      <div className='container'>
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
