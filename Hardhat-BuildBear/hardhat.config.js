/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const fs = require("fs");
const path = require("path");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-chai-matchers");
//insira a lib abaixo
require("@nomicfoundation/hardhat-foundry");

let BBTestnet;
try {
  BBTestnet = JSON.parse(
    fs.readFileSync(path.join(__dirname, "./testnet.json")).toString().trim()
  );
} catch {}

const PRIVATE_KEY = "your-private-key";


module.exports = {
  defaultNetwork: BBTestnet ? "buildbear" : "localhost",

  networks: {
    hardhat: {},
    bvm: {
      url: "https://l2-node.regtest.trustless.computer/",
      accounts:[`0x${PRIVATE_KEY}`],
      chainId: 42070
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/79b4c096477948aeac7ebfda5d04eded",
      accounts:[`0x${PRIVATE_KEY}`],
      chainId: 11155111 
    },
    buildbear: {
      url: BBTestnet ? BBTestnet.rpcUrl : "",
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.5.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.13",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.5.5",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  etherscan: {
    apiKey: {
      sepolia: "<sua>",
      buildbear: "verifyContract",
    },
    customChains: [
      {
        network: "buildbear",
        chainId: BBTestnet ? BBTestnet.chainId : 0,
        urls: {
          apiURL: BBTestnet ? BBTestnet.verificationUrl : "",
          browserURL: BBTestnet ? BBTestnet.explorerUrl : "",
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000000000,
  },
};
