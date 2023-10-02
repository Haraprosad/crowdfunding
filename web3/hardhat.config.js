/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.9",
    defaultNetwork: "sepolia",
    networks: {
    hardhat: {},
    sepolia: {
    url: "https://sepolia.rpc.thirdweb.com",
    accounts: [`0xbe14ae15352570156c3921c234f2bb8d75ee4d9fecc6b026aeb05f274cdb78be`],
    },
    },
    settings: {
    optimizer: {
    enabled: true,
    runs: 200,
    },
    },
    },
    };

