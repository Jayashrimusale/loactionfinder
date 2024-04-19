import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ users, selectedUser }) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {users.map((user, index) => (
        user.location && ( // Check if user location exists
          <Marker key={index} position={user.location}>
            <Popup>
              {user.name}<br />{user.address}
            </Popup>
          </Marker>
        )
      ))}
      {selectedUser && selectedUser.location && ( // Check if selectedUser and its location exists
        <Marker position={selectedUser.location}>
          <Popup>
            {selectedUser.name}<br />{selectedUser.address}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
