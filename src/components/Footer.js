import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-gray-800 text-center text-white text-sm absolute bottom-0 left-0">
      <p>
        <a
          href="https://x.com/ismaspliter"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          @ismaspliter
        </a> 
        &nbsp;|&nbsp;
        <a
          href="https://www.ismaspliter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          www.ismaspliter.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
