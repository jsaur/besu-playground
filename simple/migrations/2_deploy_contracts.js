var CreditRegistry = artifacts.require("CreditRegistry");

module.exports = function(deployer) {
  deployer.deploy(CreditRegistry);
};