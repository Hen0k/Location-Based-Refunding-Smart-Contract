const { ethers, providers } = require('ethers');
const LBRC = require("./build/contracts/LBRC.json");
const abi = LBRC.abi;

const contractAddress = "0xe776c87A406a622A24a042c9e0dC82c0e0bf6ED9"

const privOne = "caac38c150f14867b7f6e64f7497f5053c87cb231c439fdee96b6d7283faf019";

const url = "http://127.0.0.1:7545";

const provider = new ethers.providers.JsonRpcProvider(url);
const signer = new ethers.Wallet(
    privOne,
    provider
);
const contract = new ethers.Contract(contractAddress, abi, signer);

const empAddr = "0x770Ea67BA7e7eEca835407a2092aE467251CF091"
const addEmployee = async () => {
    const status = await contract.setAccount(
        empAddr,
        10,
        10,
        100,
        1,
        3)
    console.log(status);
}

const getAdmin = async () => {
    const admin = await contract.employer();
    // await admin.wait();
    console.log(admin)
}

const getEmps = async () => {
    const emps = await contract.employees(0);
    console.log(emps)
}

privTwo = "739c661f3885ca68269fb44e9fc1a42ec3fc19e73cd3e0b65618991ca9cca85c"
const signerTwo = new ethers.Wallet(
    privTwo,
    provider
);
const empContract = new ethers.Contract(contractAddress, abi, signerTwo);
const updateStatus = async() => {
    const status = await empContract.updateStatus(1, 2)
    console.log("Done updating")
}

const getStatus = async() => {
    const status = await contract.empContractStatus(empAddr)
    console.log(status)
}

// updateStatus().then(console.log("Done"))
getStatus().then(console.log("Done"))