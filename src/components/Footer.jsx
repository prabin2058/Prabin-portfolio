import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-500 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a
              href="#home"
              className="text-2xl font-bold text-white hover:text-primary transition-colors duration-300"
            >
              Portfolio
            </a>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://github.com/prabin2058"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/prabin-karki-157072306/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/prabin44713/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>
          </div>

          <div className="text-gray-400 text-sm">
            &copy; {currentYear} Prabin Karki. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;