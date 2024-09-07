import React, { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'tailwindcss/tailwind.css';

// Function to generate the custom marker icon with the price tag
const getCustomIcon = (price) => {
  return L.divIcon({
    html: `<div><p style="background-color: white; border: 1px solid black; padding: 5px; width:60px; border-radius: 25px;">
             $${price}
             </p>
             </div>`,
    className: '',
  });
};

const MapViewUpdater = ({ setPropertyLocations, center }) => {
  const map = useMapEvents({
    moveend: () => {
      const bounds = map.getBounds();
      const zoomLevel = map.getZoom();
      const range = zoomLevel > 13 ? 0.01 : 0.05; // Smaller range for closer zoom
      // setPropertyLocations(generateRandomCoords(center, range, zoomLevel * 5));
    },
  });
  return null;
};

const MapSection = () => {
  const [center, setCenter] = useState({ lat: 31.5497, lng: 74.3436 }); // Default coordinates for Lahore
  const [userLocation, setUserLocation] = useState(null);
  const propertyLocations = [
    {
      lat: 31.555350239103067,
      lng: 74.39333204676731,
      type: 'Apartment',
      price: '499747',
      address: 'Address 92',
      description: 'A beautiful 2-bedroom apartment with a great view.',
      img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-807996882923051521/original/77e19c57-0699-40bc-a5bd-2ebbd0d82c97.jpeg?im_w=720',
    },
    {
      lat: 31.595527499647567,
      lng: 74.40631802646273,
      type: 'House',
      price: '274759',
      address: 'Address 14',
      description: 'Spacious house with a big backyard.',
      img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-807996882923051521/original/77e19c57-0699-40bc-a5bd-2ebbd0d82c97.jpeg?im_w=720',
    },

    {
      lat: 31.595527499647567,
      lng: 74.40631802646273,
      type: 'House',
      price: '274759',
      address: 'Address 14',
      description: 'Spacious house with a big backyard.',
      img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-807996882923051521/original/77e19c57-0699-40bc-a5bd-2ebbd0d82c97.jpeg?im_w=720',
    },

    {
      lat: 31.535527499647567,
      lng: 74.20631802646273,
      type: 'House',
      price: '274759',
      address: 'Address 14',
      description: 'Spacious house with a big backyard.',
      img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-807996882923051521/original/77e19c57-0699-40bc-a5bd-2ebbd0d82c97.jpeg?im_w=720',
    },

    {
      lat: 31.395127499647567,
      lng: 71.12631802646273,
      type: 'House',
      price: '274759',
      address: 'Address 14',
      description: 'Spacious house with a big backyard.',
      img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-807996882923051521/original/77e19c57-0699-40bc-a5bd-2ebbd0d82c97.jpeg?im_w=720',
    },

    {
      lat: 31.095527499647567,
      lng: 74.40631802646373,
      type: 'House',
      price: '274759',
      address: 'Address 14',
      description: 'Spacious house with a big backyard.',
      img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-807996882923051521/original/77e19c57-0699-40bc-a5bd-2ebbd0d82c97.jpeg?im_w=720',
    },

    {
      lat: 31.595527494647567,
      lng: 74.406318021646273,
      type: 'House',
      price: '274759',
      address: 'Address 14',
      description: 'Spacious house with a big backyard.',
      img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-807996882923051521/original/77e19c57-0699-40bc-a5bd-2ebbd0d82c97.jpeg?im_w=720',
    },

    // Add other property locations here with img and description
  ];

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLatLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserLocation(userLatLng);
        setCenter(userLatLng);
        // setPropertyLocations(generateRandomCoords(userLatLng, 0.05)); // Generate initial properties
      });
    }
  }, []);

  return (
    <div className='w-full h-screen'>
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: '70vh', width: '100%' }}
      >
        {/* Tile layer from OpenStreetMap */}
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {propertyLocations.map((property, idx) => (
          <Marker
            key={idx}
            position={{ lat: property.lat, lng: property.lng }}
            icon={getCustomIcon(property.price)} // Custom icon with price
          >
            <Popup>
              <div>
                <img
                  src={property.img}
                  alt={property.type}
                  style={{ width: '100%', height: '100px', objectFit: 'cover' }}
                />
                <b>{property.type}</b>
                <br />
                Price: ${property.price}
                <br />
                {property.address}
                <br />
                <p>{property.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* User's current location marker */}
        {userLocation && (
          <>
            <Marker position={userLocation}>
              <Popup>Your Location</Popup>
            </Marker>
            <Circle
              center={userLocation}
              radius={500} // Circle radius in meters
              color='green'
              fillColor='green'
              fillOpacity={0.2}
            />
          </>
        )}
        <MapViewUpdater
          // setPropertyLocations={setPropertyLocations}
          center={center}
        />
      </MapContainer>
    </div>
  );
};

export default MapSection;
