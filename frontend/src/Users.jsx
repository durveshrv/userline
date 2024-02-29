// Users.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar1 from './components/Navbar1';
import Footer from './components/Footer';
import UserDetailsPopup from './UserDetailsPopup.jsx';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/users`)
      .then(result => setUsers(result.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (userId) => {
    axios.delete(`http://localhost:3001/deleteUser/${userId}`)
      .then(res => {
        setUsers(users => users.filter(user => user._id !== userId));
      })
      .catch(err => console.log(err));
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleClosePopup = () => {
    setSelectedUser(null);
  };

  return (
    <>
      <Navbar1 />
      <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className="w-75 bg-white rounded p-3">
          <Link to="/create" className='btn btn-success'>Add+</Link>
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Password</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>
                    <button className='btn btn-link' onClick={() => handleUserClick(user)} style={{textDecoration:'none'}}>
                      {user.name}
                    </button>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>{user.password}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                    <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedUser && (
        <UserDetailsPopup user={selectedUser} onClose={handleClosePopup} />
      )}
      <Footer />
    </>
  );
}
