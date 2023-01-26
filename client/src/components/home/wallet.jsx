import React,{useContext} from "react";
import { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { TransactionContext } from "../../../context/Transaction-Context";


const Wallet = () => {
  
  const {formData, addTransaction, handleChange} = useContext(TransactionContext)

  const handleSumbit = (e) => {
    const {addressTo,amount} = formData;
    e.preventDefault()
    console.log(formData, addressTo,amount)
    if(!addressTo || !amount){console.log("Sending transaction error")}
    else{addTransaction()}
    
  };

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
          <input  placeholder="Send to address" name="addressTo" type="text"onChange={handleChange}/>
          <input  placeholder="Amount (ETH)" name="amount" type="number"onChange={handleChange}/>
          <h4 className="send-btn" onClick={handleSumbit}>Send</h4>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
