import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom icons for different property types
const houseIcon = new L.Icon({
  iconUrl: "https://img.icons8.com/color/48/000000/home--v1.png", // House icon
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const apartmentIcon = new L.Icon({
  iconUrl: "https://img.icons8.com/color/48/000000/apartment.png", // Apartment icon
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const plotIcon = new L.Icon({
  iconUrl: "https://img.icons8.com/color/48/000000/land-sales.png", // Plot icon
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Function to generate random coordinates near a center
const generateRandomCoords = (center, range) => {
  const randomCoord = (center, range) =>
    center + Math.random() * range * (Math.random() > 0.5 ? 1 : -1);

  return Array.from({ length: 49 }, () => {
    const type = Math.random();
    return {
      lat: randomCoord(center.lat, range),
      lng: randomCoord(center.lng, range),
      type: type < 0.33 ? "House" : type < 0.66 ? "Apartment" : "Plot",
      price: (Math.random() * 500000).toFixed(0), // Random price
      address: `Address ${Math.floor(Math.random() * 100)}`, // Random address
    };
  });
};

const MapSection = () => {
  const [center, setCenter] = useState({ lat: 31.5497, lng: 74.3436 }); // Coordinates for Lahore

  const [userLocation, setUserLocation] = useState(null);
  const propertyLocations = generateRandomCoords(center, 0.05); // Generate random properties

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  // Function to determine icon based on property type
  const getIcon = (type) => {
    if (type === "House") return houseIcon;
    if (type === "Apartment") return apartmentIcon;
    return plotIcon; // Default to plot icon for "Plot" type
  };

  return (
    <MapContainer center={center} zoom={13} style={{ height: "500px", width: "100%" }}>
      {/* Tile layer from OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marker for each property location */}
      {propertyLocations.map((position, idx) => (
        <Marker
          key={idx}
          position={{ lat: position.lat, lng: position.lng }}
          icon={getIcon(position.type)}
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
            color="green"
            fillColor="green"
            fillOpacity={0.2}
          />
        </>
      )}
    </MapContainer>
  );
};

export default MapSection;


// import React from 'react';

// const MapSection = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       <img
//         src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt="Map"
//         className="w-full h-full object-cover"
//       />
//       <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
//         <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold px-4 sm:px-8">
//           Explore Properties on the Map
//         </h2>
//       </div>
//     </div>
//   );
// };

// export default MapSection;
