require("@nomicfoundation/hardhat-toolbox");

PRIVATE_KEY = "SUA_PRIVATE_KEY";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },

  networks: {
    hardhat: {},
    bvm: {
      url: "https://l2-node.regtest.trustless.computer/",
      accounts:[`0x${PRIVATE_KEY}`],
      chainId: 42070
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/<api key da sua conta>",
      accounts:[`0x${PRIVATE_KEY}`],
      chainId: 11155111 
    },
  },

};
