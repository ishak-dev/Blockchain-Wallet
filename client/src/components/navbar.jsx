import React from "react";
import "../style/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Transactions</li>
        <li>Coins</li>
      </ul>
    </div>
  );
};

export default Navbar;
