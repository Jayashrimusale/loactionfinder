import React from 'react';

const UserProfile = ({ name, photo, address }) => {
  return (
    <div>
      <img src={photo} alt={name} className="responsive-image" />
      <h2>{name}</h2>
      <p>{address}</p>
    </div>
  );
};

export default UserProfile;
