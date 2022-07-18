const { ethers, providers } = require('ethers');
const LBRC = require("./build/contracts/LBRC.json");
const abi = LBRC.abi;

const contractAddress = "0x13F68498cC89d195C12741c426348B65b74832Ff"

const privOne = "0978d90fa234b170ca65f12b3b3ebe5e075ffeca4b1ce10df2d84b170c579059";

const url = "http://127.0.0.1:7545";

const provider = new ethers.providers.JsonRpcProvider(url);
const signer = new ethers.Wallet(
    privOne,
    provider
);
const contract = new ethers.Contract(contractAddress, abi, signer);

const empAddr = "0x503F650710dAee8F0e3F57cBb8D0f05926776f61"
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

privTwo = "b9f663c7ba3195af1c254973003e929f30905d89640b2a94ab651ac2cd228787"
const signerTwo = new ethers.Wallet(
    privTwo,
    provider
);
const empContract = new ethers.Contract(contractAddress, abi, signerTwo);
const updateStatus = async() => {
    const status = await empContract.updateStatus(4, 2)
    console.log("Done updating")
}

const getStatus = async() => {
    const status = await contract.empContractStatus(empAddr)
    console.log(status)
}


// addEmployee().then(console.log("Admin: Employee Added"))
updateStatus().then(console.log("Done"))
// getStatus().then(console.log("Done"))