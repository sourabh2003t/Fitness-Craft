// src/pages/HomePage.js
import React from 'react';
import Slider from '../components/Slider';
import CardSection from '../components/CardSection';
import Card from '../components/Card';
import './HomePage.css';


const HomePage = () => {
  const categories = [
    { id: 1, name: 'Treadmill', image: '/images/tread.jpeg' },
    { id: 2, name: 'Stationary Bike', image: '/images/stat.jpeg' },
    { id: 3, name: 'Rowing Machine', image: '/images/row.jpeg' },
    { id: 4, name: 'Stair Climber', image: '/images/stair.jpeg' },
    { id: 5, name: 'Dumbbells', image: '/images/dumbbb.jpeg' },
    { id: 6, name: 'Barbells', image: '/images/barb.jpeg' },
    { id: 7, name: 'Leg Press Machine', image: '/images/legp.jpeg' },
    { id: 8, name: 'Chest Press Machine', image: '/images/chesp.png' },
  ];

  const cardsData1 = [
    { image: '/images/cardio.jpg', title: 'Cardio Machines'},
    { image: '/images/strength.jpeg', title: 'Strength Training Equipment'},
    { image: '/images/functional.jpeg', title: 'Functional Training Equipment'},
    { image: '/images/flexi.jpeg', title: 'Flexibility and Recovery Equipment'},
  ];

  const cardsData2 = [
    { image: '/images/rop.jpeg', title: 'Battle Rope'},
    { image: '/images/sus.jpeg', title: 'TRX Suspension Trainer'},
    { image: '/images/stab.jpeg', title: 'Stability Ball'},
    { image: '/images/med.png', title: 'Medicine Ball'},
  ];


  return (
    <div className="home-page">
      <Slider />
      <CardSection heading="Best Sellers" link="/best-sellers" />
      <div className="card-section">
        {cardsData1.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} description={card.description} />
        ))}
      </div>
      <CardSection heading="New Arrivals" link="/new-sellers" />
      <div className="card-section">
        {cardsData2.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} description={card.description} />
        ))}
      </div>
      <CardSection heading="Shop More" link="/" />
      <div className="categories-section">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
            <p>Shop Now</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
