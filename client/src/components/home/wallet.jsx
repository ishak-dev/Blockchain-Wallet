import React from "react";
import { FaEthereum } from "react-icons/fa";
const Wallet = () => {
  const walletConect = () => {};

  const handleSumbit = () => {};

  return (
    <div className="wallet-section">
      <h1> Wallet</h1>

      <div className="wallet-container">
        <div className="form-left">
          <h3>
            My wallet <FaEthereum className="eth-icon" />
          </h3>

          <p>Type:</p>
          <h4>Ethereum</h4>
          <p>Address:</p>
          <h4>Nothing to show</h4>
        </div>
        <div className="form-right">
          <h3>Send your crypto</h3>
          <input type="text" placeholder="Send to address" />
          <input type="text" placeholder="Amount (ETH)" />
          <h4 className="send-btn">Send</h4>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
