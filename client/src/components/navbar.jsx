import React from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link to="/" className="link-to">
        <li>Home</li></Link>
        <Link to="about-us" className="link-to"> <li>About Us</li></Link>
        <Link to="transactions" className="link-to"><li>Transactions</li></Link>
        <Link to="coins" className="link-to"><li>Coins</li></Link>
        
      </ul>
    </div>
  );
};

export default Navbar;
