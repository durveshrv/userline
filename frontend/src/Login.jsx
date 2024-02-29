import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:3001/login`, {
                email,
                password
            });

            console.log(response.data); 
            navigate('/users');
        } catch (err) {
            if (err.response && err.response.status === 401) {
                setError('Invalid email or password');
            } else {
                setError('An error occurred during login. Please try again.');
            }
        }
    };

    return (
        <>
            <Navbar />
            <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
                <div className="w-50 bg-white rounded p-3">
                    <form onSubmit={handleLogin}>
                        <h2>Login</h2>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <div className="mb-2">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" placeholder='Enter Email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" placeholder='Enter Password' className='form-control' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className='btn btn-success'>Login</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
