// src/components/Layout.js
import React from 'react';
import Navbar from '../NavBar';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col relative'>
      <div className='z-50 fixed w-full '>
        <Navbar />
      </div>
      <main className='flex-1 z-0 relative mt-16'>{children}</main>
      <div className='z-50 relative'>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
