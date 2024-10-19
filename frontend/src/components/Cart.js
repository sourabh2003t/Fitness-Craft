import React from 'react';
import './Cart.css';

const Cart = () => {
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-content">
        <div className="cart-item-box">
          <div className="cart-item">
            <img src="/images/tread.jpeg" alt="products" className="cart-item-image" />
            <div className="cart-item-details">
              <h2>RPM Fitness by Cultsport</h2>
              <p>Cult RPM5000 4.5HP</p>
              <p>Seller: CultX </p>
              <p className="price-details">
                <span className="original-price">₹79,999</span>
                <span className="discounted-price">₹30,770</span>
                <span className="discount-percentage">61% Off</span>
                <span className="offers-applied">2 offers applied</span>
              </p>
              <p>Delivery by Tue Jul 23 <span className="delivery-charge">₹40 Free</span></p>
              <div className="cart-item-actions">
                <div className="quantity-selector">
                  <button>-</button>
                  <input type="number" defaultValue="1" min="1" max="10" />
                  <button>+</button>
                </div>
                <button className="save-for-later">SAVE FOR LATER</button>
                <button className="remove">REMOVE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-price-details-box">
          <h2>Price Details</h2>
          <div className="price-detail">
            <span>Price (1 items)</span>
            <span>₹79,999</span>
          </div>
          <div className="price-detail">
            <span>Discount</span>
            <span id='gre'>− ₹49,229</span>
          </div>
          <div className="price-detail">
            <span>Delivery Charges</span>
            <span>₹40 Free</span>
          </div>
          <div className="price-detail">
            <span>Secured Packaging Fee</span>
            <span>₹29</span>
          </div>
          <div className="total-amount">
            <h3>Total Amount</h3>
            <h3>₹30,770</h3>
          </div>
          <div className="savings">
            <span>You will save ₹2,672 on this order</span>
          </div>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
      <div className="safety">
        <span>Safe and Secure Payments. Easy returns. 100% Authentic products.</span>
      </div>
    </div>
  );
};

export default Cart;
