import React, { useState } from 'react';
import './styles.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsersData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <nav>
        <h1>Lets Grow More</h1>
        <button onClick={getUsersData} disabled={loading}>
          Get Users
        </button>
      </nav>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="card-grid">
          {users.map((user) => (
            <div className="user-card" key={user.id}>
              <img className="user-image" src={user.avatar} alt={user.first_name} />
              <div className="user-details">
                <p className="user-name">{`${user.first_name} ${user.last_name}`}</p>
                <p className="user-email">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

