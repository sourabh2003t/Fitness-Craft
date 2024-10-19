
import React from 'react';
import './Newsellers.css';
import CardSection from '../components/CardSection';
import Card from '../components/Card';  

const cardsData2 = [
  { image: '/images/rop.jpeg', title: 'Battle Rope'},
  { image: '/images/sus.jpeg', title: 'TRX Suspension Trainer'},
  { image: '/images/stab.jpeg', title: 'Stability Ball'},
  { image: '/images/med.png', title: 'Medicine Ball'},
];

const NewSellers = () => {
  return (
    <div className="new-sellers">
      {/* <h1>Best Sellers</h1> */}
      <CardSection heading="New Arrivals" link="/new-sellers" />
      <div className="card-section">
        {cardsData2.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default NewSellers;
