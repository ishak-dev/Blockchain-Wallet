//https://eth-goerli.g.alchemy.com/v2/lrk1hEyGxyNs3DyQiEXta42zn5eE_GgN

require('@nomiclabs/hardhat-waffle')


module.exports ={
  solidity:"0.8.0",
  networks:{
    goerli:{
      url:"https://eth-goerli.g.alchemy.com/v2/lrk1hEyGxyNs3DyQiEXta42zn5eE_GgN",
      accounts: ['0beb3bec31462e2aa93e6a548db3449ae50bca23c678fc5b637cfe6a170af3bf']
    }
  }
}