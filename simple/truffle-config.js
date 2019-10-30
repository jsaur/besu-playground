const PrivateKeyProvider = require("truffle-hdwallet-provider");
const privateKey = "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63";

module.exports = {
  networks: {
    local: {
        provider: () => new PrivateKeyProvider(privateKey, "http://bootnode:8545"),
        network_id: "*",
        gasPrice: 0,
        gas: "0x1ffffffffffffe"
    },
  }
};