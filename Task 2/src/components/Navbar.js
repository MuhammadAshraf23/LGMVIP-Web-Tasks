import React from 'react';
const Navbar = ({ getUsers }) => {
  return (
    <nav>
      <div className="brand">User Management App</div>
      <button className="get-users-button" onClick={getUsers}>
        Get Users
      </button>
    </nav>
  );
};

export default Navbar;
