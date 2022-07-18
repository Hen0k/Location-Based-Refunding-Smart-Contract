import { ethers, Contract } from 'ethers';
import { useState, useEffect } from "react";
import HelloWorld from '../HelloWorld.json';


let url = 'http://127.0.0.1:7545';
let customHttpProvider = new ethers.providers.JsonRpcProvider(url);
const contractAddress = "0x6a9338F765497Faa20b12b91b6DE24fcE99Bf762"
let contract = new Contract(contractAddress, HelloWorld.abi, customHttpProvider)



const EmployeeForm = () => {

    let [blockNum, getBlockNum] = useState(0)
    let [message, setMessage] = useState("")
    const loadMessage = async () => {
      const message = await contract.getMessage()
      setMessage(message)
    }
    
    
    useEffect(() => {
      loadMessage()
      return () => {}
    }, [])
  
    const clickHandler = () => {
      customHttpProvider.getBlockNumber().then((result) => {
        console.log("Current block number: " + result);
        getBlockNum(result)
      });
    }
  
    const changeMessage = async (event) => {
      event.preventDefault();
      const message = event.target.msg.value
      const signer = customHttpProvider.getSigner()
      let c = new Contract(contractAddress, HelloWorld.abi, signer)
      await c.setMessage(message)
      loadMessage()
  
    }

    return <>
        <button onClick={clickHandler}>
            getBlockNumber
        </button>
        <p>Block Number: {blockNum}</p>
        <p>Message: {message}</p>
        <form onSubmit={changeMessage}>
            <input type="text" name="msg" placeholder="message"></input>
            <input type="submit" value="ok" />
        </form>
    </>
}

export default EmployeeForm;