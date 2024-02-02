import web3 from "./web3";
import PatientData from "./build/PatientData.json";

const instance = new web3.eth.Contract(
    PatientData.abi,
    "0x3bE7B4dB373707802Fcf7bf157aD1f27c70Fe576"
);

export default instance;

/*this code is used to create an instance of a smart contract by importing the configured web3 instance and the contract's ABI from 
separate files. The contract instance is then created using the specified ABI and contract address, and it's exported to be used in 
other parts of your application. This setup enables you to interact with the smart contract's functions and data using the instance.*/