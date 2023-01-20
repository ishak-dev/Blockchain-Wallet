const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

const main = async () =>{
  const Transactions = await hre.ethers.getContractFactory("Transactions")
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Tranasction deployed to: ",transactions.address)
}

const runMain = async ()=>{
  try {
    await main();  
    process.exit(0); //all processes finished good
  } catch (error) {
    console.log(error) 
    process.exit(1)
  }
}


runMain()