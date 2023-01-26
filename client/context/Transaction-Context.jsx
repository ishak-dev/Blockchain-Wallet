import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { abiContract, addressContract } from "../src/utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    addressContract,
    abiContract,
    signer
  );
  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({ addressTo: "", amount: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [transCount, setTransCount] = useState(
    localStorage.getItem("transCount")
  );
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const getAllTransactions = async () => {
    try {
      if (!ethereum) {
        return alert("Please install metamask");
      }
      const transactionContract = getEthContract();
      const transactionsAvailable =
        await transactionContract.getAllTransactions();
      const structTransaction = transactionsAvailable.map((transaction) => ({
        addressFrom: transaction.sender,
        addressTo: transaction.receiver,
        amount: parseInt(transaction.amount._hex) / 10 ** 18,
        timestamp: new Date(
          transaction.timestamp.toNumber() * 1000
        ).toLocaleString(),
      }));
      setTransactions(structTransaction);
      console.log(structTransaction);
    } catch (error) {
      console.log(error);
      console.log("Ethereum transactions problem");
    }
  };
  const checkWalletConnection = async () => {
    try {
      if (!ethereum) {
        return alert("Please install metamask");
      }
      const accounts = await ethereum.request({ method: "eth_accounts" });

      console.log("method: " + accounts);
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getAllTransactions();
      } else {
        console.log("no account");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No eth object");
    }
  };

  const checkTransactionExist = async () => {
    try {
      const transactionContract = getEthContract();
      const transCount = await transactionContract.getTransactionCount();
      window.localStorage.setItem("transCount", transCount.toNumber());
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };
  const connectWallet = async () => {
    try {
      if (!ethereum) {
        return alert("Please install metamask");
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No eth object");
    }
  };

  const addTransaction = async () => {
    try {
      if (!ethereum) {
        return alert("Please install metamask");
      }

      const { addressTo, amount } = formData;
      const transactionContract = getEthContract();
      const parsedAmount = ethers.utils.parseEther(amount);
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x55F0", //22 000 GWEI
            value: parsedAmount._hex,
          },
        ],
      });

      const transHash = await transactionContract.addToBlockchain(
        addressTo,
        parsedAmount
      );

      setIsLoading(true);
      console.log("Loading: " + transHash.hash);
      await transHash.wait();
      setIsLoading(false);
      console.log("Successful: " + transHash.hash);

      const transCount = await transactionContract.getTransactionCount();

      setTransCount(transCount.toNumber());
    } catch (error) {
      console.log(error);
      throw new Error("No eth object");
    }
  };

  useEffect(() => {
    checkWalletConnection();
    checkTransactionExist();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange,
        addTransaction,
        transactions,
        isLoading,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
