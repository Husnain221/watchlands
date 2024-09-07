import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-blue-900 py-8">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <a href="#home" className="text-2xl font-bold text-blue-600 tracking-widest">
            PRO<span className="text-blue-800">perty</span>
          </a>
        </div>
        <div className="mb-4 flex justify-center space-x-8 text-blue-700">
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
          <a href="#terms" className="hover:underline">Terms of Service</a>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FiFacebook size={24} className="hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FiTwitter size={24} className="hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FiInstagram size={24} className="hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FiLinkedin size={24} className="hover:text-blue-500 transition duration-300" />
          </a>
        </div>
        <p className="text-blue-600">&copy; 2024 PROperty. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
