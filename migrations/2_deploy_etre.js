const Evertree = artifacts.require('Evertree');
 
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
 
module.exports = async function (deployer) {
  await deployProxy(Evertree, [
      "0x6f6c087275d6CD677304Ba3cCE0051b6894ca3B2",
      240000000,
      24000000
  ], { deployer, initializer: 'initialize' });
};