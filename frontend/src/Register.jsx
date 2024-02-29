import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

export default function Register() {
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
            console.log(result.data);
            navigate('/login');
        })
        .catch(err => {
            if (err.response) {
                console.error('Error response from server:', err.response.data);
            } else if (err.request) {
                console.error('No response received from server:', err.request);
            } else {
                console.error('Error during request setup:', err.message);
            }
        });
    };
    

    return (
        <>
        <Navbar/>
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h2>Register User</h2>
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
        <Footer/>
        </>
    );
}
