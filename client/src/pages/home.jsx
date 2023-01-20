import React from "react";
import Intro from "../components/home/intro";
import Wallet from "../components/home/wallet";

import "../style/home.css";
const Home = () => {
  return (
    <div className="home-section">
      <Intro />
      <Wallet />
    </div>
  );
};

export default Home;
