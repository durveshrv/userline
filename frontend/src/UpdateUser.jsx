import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/getUser/${id}`)
      .then(result => {
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
        setPassword(result.data.password || '');
        setPhone(result.data.phone || '');
      })
      .catch(err => console.log(err));
  }, [id]);

  const Update = (e) => {
    e.preventDefault();
    axios.put(`${window.location.origin}/updateUser/${id}`, {
      name,
      email,
      age,
      password,
      phone
    })
      .then(result => {
        navigate('/users');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder='Enter Name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder='Enter Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="age">Age:</label>
            <input type="text" id="age" placeholder='Enter Age' className='form-control' value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder='Enter Password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" placeholder='Enter Phone' className='form-control' value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  );
}
