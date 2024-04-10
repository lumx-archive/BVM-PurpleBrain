require("@nomicfoundation/hardhat-toolbox");

PRIVATE_KEY = "b0431b95816bffd9454c35f814b532057e538cc74e47ea5e78b7b065e9811ddc";

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
