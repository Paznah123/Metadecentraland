const Token = artifacts.require('./Token.sol');
const World = artifacts.require('./World.sol');

module.exports = async (deployer) => {
  await deployer.deploy(Token, 'Paz Ronen Coin', 'PRC');
  const tokenInstance = await Token.deployed();

  await deployer.deploy(World, tokenInstance.address);
};