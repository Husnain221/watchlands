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

// Custom icons for different property types
const houseIcon = new L.Icon({
  iconUrl: 'https://img.icons8.com/color/48/000000/home--v1.png', // House icon
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const apartmentIcon = new L.Icon({
  iconUrl: 'https://img.icons8.com/color/48/000000/apartment.png', // Apartment icon
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const plotIcon = new L.Icon({
  iconUrl: 'https://img.icons8.com/color/48/000000/land-sales.png', // Plot icon
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Function to generate random coordinates near a center
const generateRandomCoords = (center, range, count = 20) => {
  const randomCoord = (center, range) =>
    center + Math.random() * range * (Math.random() > 0.5 ? 1 : -1);

  return Array.from({ length: count }, () => {
    const type = Math.random();
    return {
      lat: randomCoord(center.lat, range),
      lng: randomCoord(center.lng, range),
      type: type < 0.33 ? 'House' : type < 0.66 ? 'Apartment' : 'Plot',
      price: (Math.random() * 500000).toFixed(0), // Random price
      address: `Address ${Math.floor(Math.random() * 100)}`, // Random address
    };
  });
};

// Component to update the view when the map moves or zooms
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
  const [propertyLocations, setPropertyLocations] = useState([
    {
      lat: 31.555350239103067,
      lng: 74.39333204676731,
      type: 'Apartment',
      price: '499747',
      address: 'Address 92',
    },
    {
      lat: 31.595527499647567,
      lng: 74.40631802646273,
      type: 'House',
      price: '274759',
      address: 'Address 14',
    },
    {
      lat: 31.56059108451944,
      lng: 74.39916306754355,
      type: 'Apartment',
      price: '312232',
      address: 'Address 24',
    },
    {
      lat: 31.629676155405903,
      lng: 74.33970074345243,
      type: 'Apartment',
      price: '410213',
      address: 'Address 30',
    },
    {
      lat: 31.557845213862805,
      lng: 74.39234864858513,
      type: 'Apartment',
      price: '283525',
      address: 'Address 51',
    },
    {
      lat: 31.551096835912887,
      lng: 74.32136675388269,
      type: 'Plot',
      price: '307870',
      address: 'Address 72',
    },
    {
      lat: 31.618956802003765,
      lng: 74.34571583797228,
      type: 'Plot',
      price: '286511',
      address: 'Address 58',
    },
    {
      lat: 31.597970262062155,
      lng: 74.31838298165263,
      type: 'Plot',
      price: '156488',
      address: 'Address 65',
    },
    {
      lat: 31.63270568199844,
      lng: 74.36647298868748,
      type: 'Apartment',
      price: '15031',
      address: 'Address 26',
    },
    {
      lat: 31.55805528279479,
      lng: 74.38325292859412,
      type: 'House',
      price: '462878',
      address: 'Address 19',
    },
    {
      lat: 31.622780739089446,
      lng: 74.38770989902487,
      type: 'House',
      price: '392939',
      address: 'Address 75',
    },
    {
      lat: 31.548153805601597,
      lng: 74.38301446117976,
      type: 'House',
      price: '484774',
      address: 'Address 37',
    },
    {
      lat: 31.559131219841177,
      lng: 74.33575294688272,
      type: 'House',
      price: '483775',
      address: 'Address 2',
    },
    {
      lat: 31.609754848218316,
      lng: 74.35620873649901,
      type: 'Apartment',
      price: '107937',
      address: 'Address 39',
    },
    {
      lat: 31.63002141295503,
      lng: 74.35542723891953,
      type: 'Plot',
      price: '350826',
      address: 'Address 40',
    },
    {
      lat: 31.631853128909672,
      lng: 74.34998400530803,
      type: 'Apartment',
      price: '328557',
      address: 'Address 10',
    },
    {
      lat: 31.545014122831283,
      lng: 74.35038399204392,
      type: 'Apartment',
      price: '244496',
      address: 'Address 12',
    },
    {
      lat: 31.634006263681346,
      lng: 74.41097333261807,
      type: 'Plot',
      price: '59714',
      address: 'Address 8',
    },
    {
      lat: 31.626393013482925,
      lng: 74.35348689831682,
      type: 'Apartment',
      price: '126277',
      address: 'Address 16',
    },
    {
      lat: 31.585392288392693,
      lng: 74.33294213359515,
      type: 'Apartment',
      price: '99331',
      address: 'Address 3',
    },
  ]);

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

  // Function to determine icon based on property type
  const getIcon = (type) => {
    if (type === 'House') return houseIcon;
    if (type === 'Apartment') return apartmentIcon;
    return plotIcon; // Default to plot icon for "Plot" type
  };

  return (
    <div className='w-full h-screen'>
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        {/* Tile layer from OpenStreetMap */}
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Marker for each property location */}
        {propertyLocations.map((position, idx) => (
          <Marker
            key={idx}
            position={{ lat: position.lat, lng: position.lng }}
            // icon={getIcon(position.type)}
          >
            <Popup>
              <b>{position.type}</b>
              <br />
              Price: ${position.price}
              <br />
              {position.address}
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

        {/* View updater component to re-render listings on move/zoom */}
        <MapViewUpdater
          // setPropertyLocations={setPropertyLocations}
          center={center}
        />
      </MapContainer>
    </div>
  );
};

export default MapSection;
