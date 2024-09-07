// src/pages/Home.js
import React from 'react';
import SearchBar from '../components/SearchBar';
import MapSection from '../components/MapSection';
import Layout from '../components/Layout/Layout';

const Home = () => {
  const listings = [
    {
      id: 1,
      name: 'Listing 1',
      description: 'This is a beautiful place.',
      location: { lat: 51.509865, lng: -0.118092 },
    },
    {
      id: 2,
      name: 'Listing 2',
      description: 'Amazing location with great views.',
      location: { lat: 51.517622, lng: -0.101599 },
    },
    {
      id: 3,
      name: 'Listing 3',
      description: 'Cozy and affordable.',
      location: { lat: 51.507351, lng: -0.127758 },
    },
    {
      id: 4,
      name: 'Listing 4',
      description: 'Close to the city center.',
      location: { lat: 51.512344, lng: -0.090985 },
    },
    {
      id: 5,
      name: 'Listing 5',
      description: 'Perfect for families.',
      location: { lat: 51.503324, lng: -0.119543 },
    },
    // Add more listings here
  ];
  return (
    <Layout>
      {/* <SearchBar /> */}
      <MapSection listings={listings} />
    </Layout>
  );
};

export default Home;
