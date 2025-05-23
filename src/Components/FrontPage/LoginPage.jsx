import React from 'react';
import './LoginPage.css';
import Header from '../../../Header';

const LoginPage = () => {
  return (
    <>
    <Header />
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              required 
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
          <p className="helper-text">Forgot your password? <a href="#">Reset it</a></p>
        </form>
      </div>
    </div>
    </>
  );
};

export default LoginPage;
