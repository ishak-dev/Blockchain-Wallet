import React,{useContext} from "react";
import CryptoWallpaper from "../../img/crypto_wallpaper.png";
import { TransactionContext } from "../../../context/Transaction-Context";

const Intro = () => {

  const {connectWallet,currentAccount} = useContext(TransactionContext);

  return (
    <div className="intro-component">
      <div className="intro-wallpaper">
        <img
          src={CryptoWallpaper}
          alt="cryptowallpaper"
          className="crypto-wallpaper"
        />
      </div>
      <div className="intro-text">
        <h1>Cryptocurrency wallet created By Ishak </h1>
        <p>Use our wallet to send and receive crypto</p>
        
          
        <button className="connect-wallet-btn" onClick={connectWallet}>
          {currentAccount ? "Your account is connected" : "Connect wallet"}
          </button>
        
      </div>
    </div>
  );
};

export default Intro;
