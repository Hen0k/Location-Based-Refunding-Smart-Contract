// const { ethers } = require("ethers");
// const HelloWorld = require("./build/contracts/HelloWorld.json");

// const contract = new ethers.Contract("0x8107Ec25512aB2Cb8B8cAA173FdD6B02B577a367", HelloWorld, "407043543b30e550158be760a6fc9174ed6bdfa4fb58a8b6171cb7d73a094695");
// console.log(contract);
// // console.log(HelloWorld);
const ethers = requier("ethers")

const url = "http://localhost:7545";

// Or if you are running the UI version, use this instead:
// const url = "http://localhost:7545"

const provider = new ethers.providers.JsonRpcProvider(url);

// Getting the accounts
const signer0 = provider.getSigner(0);
const signer1 = provider.getSigner(1);