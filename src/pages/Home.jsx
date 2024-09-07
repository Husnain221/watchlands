// src/pages/Home.js
import React from 'react';
import SearchBar from '../components/SearchBar';
import MapSection from '../components/MapSection';
import Layout from '../components/Layout/Layout';

const Home = () => {
  return (
    <Layout>
      {/* <SearchBar /> */}
      <MapSection />
    </Layout>
  );
};

export default Home;
