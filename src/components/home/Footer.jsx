// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Footer
import React from "react";
import "../../css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>HomelyHub</h2>
          <p>Find your comfort, away from home.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/accomodation">Accommodations</Link></li>
            <li><Link to="/user/mybookings">My Bookings</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HomelyHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
