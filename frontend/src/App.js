// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import BestSellers from './pages/Bestsellers';
import NewSellers from './pages/Newsellers';
import LoginPage from './components/Login';
import Cart from './components/Cart';
import SignupPage from './components/Signup';
import './App.css';

const AppContent = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!isAuthPage && <Navbar />}
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/best-sellers" element={<BestSellers />} />
          <Route path="/new-sellers" element={<NewSellers />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      {!isAuthPage && <Footer />}
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
