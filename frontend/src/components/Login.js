import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';  

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();  

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.token);      
      navigate('/')

    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Invalid email or password');  
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-overlay"></div>
        <div className="login-left-content">
          <h2>Welcome back to</h2>
          <h2>Tekniksfitness</h2>
        </div>
      </div>
      <div className="login-right">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
            required
          />
          <button type="submit">Login</button>
        </form>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <p>
          Don't have an account? <Link to="/signup">Create new</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
