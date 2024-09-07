import React from 'react';
import Layout from '../../components/Layout/Layout';
import { FiFilter, FiStar, FiHome } from 'react-icons/fi';

const properties = [
  {
    id: 1,
    name: "Elegant Country Villa",
    location: "Countryside",
    price: "$2,500/month",
    image: "https://c4.wallpaperflare.com/wallpaper/846/173/87/5c1cbaf96bcec-wallpaper-preview.jpg",
    description: "A beautiful country villa with large gardens and modern amenities.",
  },
  {
    id: 2,
    name: "Modern Apartment",
    location: "Uptown",
    price: "$1,800/month",
    image: "https://i.pinimg.com/736x/93/e1/0e/93e10e06e28a305bbb1f9be260cec04f.jpg",
    description: "A sleek apartment in the heart of the city with great views and amenities.",
  },
  {
    id: 3,
    name: "Cozy Beach House",
    location: "Beachside",
    price: "$2,000/month",
    image: "https://i.pinimg.com/originals/b1/15/18/b11518ccfd6295f09f83b7d4baec7cfd.jpg",
    description: "A charming beach house with direct access to the ocean and stunning views.",
  },
  {
    id: 4,
    name: "Luxurious Penthouse",
    location: "City Center",
    price: "$4,500/month",
    image: "https://w0.peakpx.com/wallpaper/441/409/HD-wallpaper-3d-house-design-modern-exterior-design-modern-house.jpg",
    description: "A high-end penthouse offering unmatched luxury and panoramic city views.",
  },
  {
    id: 5,
    name: "Charming Suburban Home",
    location: "Suburbia",
    price: "$1,700/month",
    image: "https://e0.pxfuel.com/wallpapers/559/288/desktop-wallpaper-fabulous-unique-home-big-house.jpg",
    description: "A lovely suburban home with a spacious garden and family-friendly features.",
  },
];

const HomesListing = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-800">Find Your Dream Property</h1>
          <p className="text-lg text-center text-gray-700 mb-10">
            Discover a variety of properties that fit your lifestyle and preferences. Use the filters below to refine your search.
          </p>

          <div className="mb-8 flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="relative w-full lg:w-1/2">
              <select className="block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ease-in-out">
                <option value="">Filter by Location</option>
                <option value="countryside">Countryside</option>
                <option value="uptown">Uptown</option>
                <option value="beachside">Beachside</option>
                <option value="city-center">City Center</option>
                <option value="suburbia">Suburbia</option>
              </select>
              <FiFilter className="absolute right-3 top-3 text-gray-500" />
            </div>

            <div className="relative w-full lg:w-1/2">
              <select className="block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ease-in-out">
                <option value="">Filter by Price Range</option>
                <option value="1000-2000">$1,000 - $2,000</option>
                <option value="2000-3000">$2,000 - $3,000</option>
                <option value="3000-4000">$3,000 - $4,000</option>
                <option value="4000+">$4,000+</option>
              </select>
              <FiFilter className="absolute right-3 top-3 text-gray-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800">{property.name}</h2>
                  <p className="text-gray-600 mb-2 flex items-center">
                    <FiHome className="mr-2 text-blue-600" />
                    {property.location}
                  </p>
                  <p className="text-blue-600 text-lg font-bold flex items-center">
                    <FiStar className="mr-2" />
                    {property.price}
                  </p>
                  <p className="text-gray-700 mt-2">{property.description}</p>
                  <a
                    href={`/properties/${property.id}`}
                    className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomesListing;
