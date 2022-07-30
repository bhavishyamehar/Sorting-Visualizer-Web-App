import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and built by{' '}
        <a
          href="https://www.linkedin.com/in/bhavishya-mehar-91641820b/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Bhavishya
        </a>
      </section>
    </footer>
  );
};

export default Footer;
