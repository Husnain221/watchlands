import React from 'react';
import Layout from '../../components/Layout/Layout';
import { FiMapPin, FiDollarSign, FiFilter } from 'react-icons/fi';

const flats = [
  {
    id: 1,
    name: "Modern City Flat",
    location: "Downtown",
    price: "$1,200/month",
    image: "https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?b=1&s=612x612&w=0&k=20&c=t3YaLHuqKH9KIAWMjzkFT78-dLFg4gvtVr5ilBvMphI=",
    description: "A modern city flat with stunning views of the downtown area. Close to restaurants and shopping centers.",
  },
  {
    id: 2,
    name: "Cozy Suburban Flat",
    location: "Suburbia",
    price: "$950/month",
    image: "https://www.shutterstock.com/image-photo/eu-modern-european-complex-apartment-600nw-1445600369.jpg",
    description: "A cozy flat located in the suburbs. Perfect for a small family or professionals looking for peace and quiet.",
  },
  {
    id: 3,
    name: "Luxury Penthouse",
    location: "City Center",
    price: "$3,500/month",
    image: "https://cdn.create.vista.com/api/media/small/155165354/stock-photo-architectural-complex-of-residential-buildings",
    description: "A luxurious penthouse with premium amenities and breathtaking views of the city skyline.",
  },
  {
    id: 4,
    name: "Spacious Urban Loft",
    location: "Midtown",
    price: "$2,000/month",
    image: "https://img.freepik.com/premium-photo/european-modern-residential-buildings-apartment-quarter-other-outdoor-facilities_250132-11694.jpg",
    description: "A spacious urban loft with an open floor plan. Ideal for those who appreciate modern design and ample space.",
  },
  {
    id: 5,
    name: "Sunny Beachside Flat",
    location: "Beachfront",
    price: "$1,800/month",
    image: "https://img.freepik.com/premium-photo/europe-architectural-residential-apartment-building-complex-outdoor-facilities_250132-9162.jpg",
    description: "A sunny beachside flat offering direct access to the beach and panoramic ocean views.",
  },
  {
    id: 6,
    name: "Elegant Historic Apartment",
    location: "Old Town",
    price: "$1,500/month",
    image: "https://img.freepik.com/premium-photo/apartment-residential-building-exterior-housing-structure-blue-modern-house-europe-rental-home-city-district-summer-wall-glass-high-architecture-business-property-investment_250132-3846.jpg",
    description: "An elegant historic apartment with vintage charm and modern comforts, located in a historic district.",
  },
];

const FlatsListingPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">Find Your Perfect Flat</h1>
          <p className="text-lg text-center text-gray-600 mb-8">
            Explore our range of available flats, from modern city apartments to cozy suburban homes. Use the filters below to narrow down your search and find the perfect place to call home.
          </p>
          <div className="mb-6 flex justify-center">
            <div className="relative w-full md:w-1/2 lg:w-1/3">
              <select className="block w-full py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Filter by Location</option>
                <option value="downtown">Downtown</option>
                <option value="suburbia">Suburbia</option>
                <option value="city-center">City Center</option>
                <option value="midtown">Midtown</option>
                <option value="beachfront">Beachfront</option>
                <option value="old-town">Old Town</option>
              </select>
              <FiFilter className="absolute right-2 top-2 text-gray-500" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flats.map((flat) => (
              <div key={flat.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <img
                  src={flat.image}
                  alt={flat.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{flat.name}</h2>
                  <p className="text-gray-600 mb-2 flex items-center">
                    <FiMapPin className="mr-2 text-blue-600" />
                    {flat.location}
                  </p>
                  <p className="text-blue-600 text-lg font-bold flex items-center">
                    <FiDollarSign className="mr-2" />
                    {flat.price}
                  </p>
                  <p className="text-gray-700 mt-2">{flat.description}</p>
                  <a
                    href={`/flats/${flat.id}`}
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

export default FlatsListingPage;
