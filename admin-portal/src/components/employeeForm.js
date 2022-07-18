import "./employeeForm.css"
import { ethers, Contract } from 'ethers';
import { useState } from "react";
import LBRC from './LBRC.json';

const abi = LBRC.abi;



const EmployeeForm = () => {

  let [empData, setEmployeeData] = useState("")
  // let [message, setMessage] = useState("")

  const createAdminSignedContract = () => {
    const contractAddress = "0x13F68498cC89d195C12741c426348B65b74832Ff"
    const privateKey = "a8c80296d57ea1606736a7cf5d3e07f73f9aef581c049c313e6ba53a684f660c";
    const url = "http://127.0.0.1:7545";
    const provider = new ethers.providers.JsonRpcProvider(url);
    const signer = new ethers.Wallet(
      privateKey,
      provider
    );
    const contract = new Contract(contractAddress, abi, signer);
    return contract
  }

  const clickHandler = async (event) => {
    event.preventDefault();
    console.log("Clicked")
    const addr = event.target.addr.value;
    const contract = createAdminSignedContract()
    const empData = await contract.empContractStatus(addr);
    setEmployeeData(empData);
    // console.log(addr);
    // setEmployeeData(empData);

  }

  const changeStatus = async (event) => {
    event.preventDefault();
    const addr = event.target.addr.value
    const lat = event.target.lat.value
    const lon = event.target.lon.value
    const radius = event.target.radius.value
    const payAmount = event.target.payAmount.value
    const reqCount = event.target.reqCount.value

    const contract = createAdminSignedContract()

    const status = await contract.setAccount(
      addr,
      lat,
      lon,
      radius,
      payAmount,
      reqCount)
    console.log(status)
  }

  return <>
    <form onSubmit={clickHandler}>
      <input type="text" name="addr" placeholder="public address"></input>
      <input type="submit" value="get employee data" />
    </form>
    <p>Latitude: {empData[0]}</p>
    <p>Longitude: {empData[1]}</p>
    <p>Radius: {empData[2]}</p>
    <p>Payment Amount: {empData[3]}</p>
    <p>Check-in count: {empData[4]}</p>
    <p>Required check-ins: {empData[5]}</p>
    <form onSubmit={changeStatus}>
      <input type="text" name="addr" placeholder="public address"></input>
      <input type="number" min="-90" max="90" name="lat" placeholder="Latitude"></input>
      <input type="number" min="-180" max="180" name="lon" placeholder="Longitude"></input>
      <input type="number" min="0" name="radius" placeholder="radius"></input>
      <input type="number" min="0" name="payAmount" placeholder="eth amount"></input>
      <input type="number" min="1" name="reqCount" placeholder="minimum successfully check in"></input>
      <input type="submit" value="ok" />
    </form>
  </>
}

export default EmployeeForm;