const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const PatientData = require('./build/PatientData.json');

const provider = new HDWalletProvider(
  'Your_Mnemonic',
  'YOUR_INFURA_URL'
 );
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(PatientData.abi)
    .deploy({ data: PatientData.evm.bytecode.object })
    .send({from: accounts[0],  gas: '2000000' })
    .catch((err) => {
      console.error('Error deploying contract:', err);
  });;

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
