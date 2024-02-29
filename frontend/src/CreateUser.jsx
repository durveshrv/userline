import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3001/createUser`, {
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
                <form onSubmit={Submit}>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" placeholder='Enter Name' className='form-control' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder='Enter Email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="age">Age:</label>
                        <input type="text" id="age" placeholder='Enter Age' className='form-control' onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" placeholder='Enter Password' className='form-control' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="phone" placeholder='Enter Phone' className='form-control' onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
}
