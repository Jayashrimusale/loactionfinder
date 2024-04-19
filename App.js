import React, { useState } from 'react';
import UserProfile from './Components/UserProfile';
import Map from './Components/Map';

const App = () => {
  const [users, setUsers] = useState([
    {
      name: 'John Doe',
      photo: 'https://via.placeholder.com/150',
      address: '123 Main St, City, Country',
      location: [51.505, -0.09], // Example coordinates
    },
    {
      name: 'Jane Smith',
      photo: 'https://via.placeholder.com/150',
      address: '456 Elm St, Town, Country',
      location: [51.51, -0.1], // Example coordinates
    },
    // Add more users as needed
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  const handleSummaryClick = (index) => {
    setSelectedUser(users[index]);
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <div>
        {users.map((user, index) => (
          <div key={index}>
            <UserProfile
              name={user.name}
              photo={`https://via.placeholder.com/150?text=${encodeURIComponent(user.name)}`} // Include the name in the placeholder URL
              address={user.address}
            />
            <button onClick={() => handleSummaryClick(index)}>Summary</button>
          </div>
        ))}
      </div>
      <Map users={users} selectedUser={selectedUser} />
    </div>
  );
};

export default App;
