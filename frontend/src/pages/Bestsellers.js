// src/pages/BestSellers.js
import React from 'react';
import './Bestsellers.css';
import CardSection from '../components/CardSection';
import Card from '../components/Card';



const cardsData1 = [
  { image: '/images/cardio.jpg', title: 'Cardio Machines' },
  { image: '/images/strength.jpeg', title: 'Strength Training Equipment' },
  { image: '/images/functional.jpeg', title: 'Functional Training Equipment' },
  { image: '/images/flexi.jpeg', title: 'Flexibility and Recovery Equipment' },
];

const BestSellers = () => {
  return (
    <div className="best-sellers">
      {/* <h1>Best Sellers</h1> */}
      <CardSection heading="Best Sellers" link="/best-sellers" />
      <div className="card-section">
        {cardsData1.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
