require("@nomicfoundation/hardhat-toolbox");

// NEVER record important private keys in your code - this is for demo purposes
const SEPOLIA_TESTNET_PRIVATE_KEY = "7ab481906471300a3982c4fd072e1c786237a1cf8d392c02a124de4f481b2c12";
const ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY = "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    arbitrumSepolia: {
      url: "https://sepolia-rollup.arbitrum.io/rpc",
      chainId: 421614,
      //accounts: [Sepolia_TESTNET_PRIVATE_KEY]
    },
    arbitrumOne: {
      url: "https://arb1.arbitrum.io/rpc",
      //accounts: [ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY]
    },
  },
};
