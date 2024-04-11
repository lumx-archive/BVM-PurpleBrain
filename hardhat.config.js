require("@nomicfoundation/hardhat-toolbox");

PRIVATE_KEY = "sua-private-key";

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
      url: "https://sepolia.infura.io/v3/69364eab3a21435e858d0c5724377fd6",
      accounts:[`0x${PRIVATE_KEY}`],
      chainId: 11155111 
    },
  },

};
