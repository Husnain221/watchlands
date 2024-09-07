import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

const MapView = ({ listings }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedListing, setSelectedListing] = useState(null); // For handling selected listing popup
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCBxK9V20RhwTQAAV-cuTUptWfy8b90_g0', // Replace with your API key
  });

  // Map container style
  const containerStyle = {
    width: '100%',
    height: '100vh', // Full height of the viewport
  };

  // Default zoom level to cover a 10km radius
  const defaultZoom = 14;

  // Get user's current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  // Render the map when loaded
  if (!isLoaded || !userLocation) return <div>Loading map...</div>;

  return (
    <div className='h-screen w-full'>
      <GoogleMap
        mapContainerStyle={containerStyle} // Ensure the map takes up the full screen
        center={userLocation}
        zoom={defaultZoom}
      >
        {/* Show a marker for the user's location */}
        <Marker
          position={userLocation}
          icon={{
            url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png', // Custom blue marker for user's location
          }}
        >
          <InfoWindow position={userLocation}>
            <div>
              <h3>Me</h3> {/* Tooltip for the current user */}
            </div>
          </InfoWindow>
        </Marker>

        {/* Render markers for listings */}
        {listings.map((listing) => (
          <Marker
            key={listing.id}
            position={listing.location}
            onClick={() => setSelectedListing(listing)}
            icon={{
              url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', // Custom red marker for listings
            }}
          />
        ))}

        {/* Show InfoWindow for selected listing */}
        {selectedListing && (
          <InfoWindow
            position={selectedListing.location}
            onCloseClick={() => setSelectedListing(null)}
          >
            <div className='w-64'>
              <img
                src={selectedListing.image}
                alt={selectedListing.name}
                className='w-full h-32 object-cover rounded'
              />
              <h2 className='text-lg font-bold mt-2'>{selectedListing.name}</h2>
              <p className='text-sm mt-1'>{selectedListing.description}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default MapView;
