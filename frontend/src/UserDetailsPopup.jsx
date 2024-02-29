
import React from 'react';
import "./styles/UserDetailsPopup.css"
const UserDetailsPopup = ({ user, onClose }) => {
  return (
    <div className="user-details-popup">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">Email: {user.email}</p>
          <p className="card-text">Phone: {user.phone}</p>
          {/* Add more details if needed */}
          <button className="btn btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPopup;
