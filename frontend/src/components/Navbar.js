import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">FitCraft Studio</Link>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-buttons">
        <Link to="/login" className="navbar-button">Login</Link>
        <Link to="/cart" className="navbar-button">
          <img src="/images/cart.png" alt="Add to Cart" className="cart-icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
