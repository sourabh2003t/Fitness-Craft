// src/components/CardSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CardSection.css';

const CardSection = ({ heading, link }) => {
  return (
    <div className="card-section">
      <h2>
        <Link to={link}>{heading}</Link>
      </h2>
      <div className="cards">
        {/* Add your cards here */}
      </div>
    </div>
  );
};

export default CardSection;
