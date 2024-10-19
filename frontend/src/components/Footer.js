import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section company-info">
                <h2 className="company-logo">Tekniksfitness</h2>
                <p>Tekniksfitness Private Limited</p>
                <p>Adding fuel to every fitness fanatic’s passion with the best equipment. Experts in setting home/commercial Gyms & CrossFit boxes PAN India</p>
                <p>329, Fitness Center Camp, Pune, Maharashtra 411001</p>
            </div>
            <div className="footer-section">
                <h4>SHOP</h4>
                <ul>
                    <li><a href="#">Barbells & Plates</a></li>
                    <li><a href="#">Home Gym Equipment</a></li>
                    <li><a href="#">Cardio Machines</a></li>
                    <li><a href="#">Multi Gym Machines</a></li>
                    <li><a href="#">Strength Training Machines</a></li>
                    <li><a href="#">Crossfit Equipments</a></li>
                    <li><a href="#">Gym Accessories</a></li>
                    <li><a href="#">Elite Strength Machines</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>HELP</h4>
                <ul>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Accessibility</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>ABOUT</h4>
                <ul>
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">Mission & Values</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Digestive Health</a></li>
                    <li><a href="#">Press & Media</a></li>
                    <li><a href="#">Investor Relations</a></li>
                 
                </ul>
            </div>
            <div className="footer-section subscribe-section">
                <h4>Sign up to get 10% off your first order</h4>
                <div className="newsletter">
                    <input type="email" placeholder="Your Email Address" />
                    <button>Subscribe</button>
                </div>
                <div className="social-media">
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Tekniksfitness, Inc. All Rights Reserved</p>
                <div className="footer-links">
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
