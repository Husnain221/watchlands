import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-100 w-full text-blue-900 py-8 ">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <a href="#home" className="text-2xl font-bold text-blue-600 tracking-widest">
            <span className="text-slate-500">Watch</span>
            <span className="text-slate-700">Lands</span>
          </a>
        </div>
        <div className="mb-4 flex justify-center space-x-8 text-blue-700">
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms-conditions" className="hover:underline">Terms of Service</Link>
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
        <p className="text-blue-600">&copy; 2024 WatchLands. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
