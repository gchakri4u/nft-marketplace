const BidNFT = artifacts.require("BidNFT");

module.exports = function (deployer) {
  deployer.deploy(BidNFT);
};