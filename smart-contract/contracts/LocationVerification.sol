// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract LBRC {

    address public employer;
    address[] public employees;

    struct ContractStatus {
        int256 cenLat;
        int256 cenLon;
        int256 radius;
        uint8 payAmount;
        uint8 compCount;
        uint8 reqAmount;
    }

    mapping(address => ContractStatus) public empContractStatus;
    //////////////////////////////////////////////////////////////////////
    // helper functions
    constructor () {
        employer = msg.sender;
    }
    
    // Define a re-usable access modifier
    // To be used when the contract updating and emplyee
    // data submission functions are called
    modifier onlyEmployer() {
        require(msg.sender == employer, "Only employeer has access to this function");
        _;
    }
    modifier onlyEmployee(address _addr) {
        require(msg.sender == _addr, "Only an employee has access to this function");
        bool exists = false;

        for (uint256 i = 0; i < employees.length; i++) {
            if (employees[i] == _addr) {
                exists = true;
                break;
            }
        }

        require(exists, "Only an  employee has access to this function");
        _;
    }

    function sqrt(int256 input) private pure returns (int256 output) {
        int256 temp = (input + 1) / 2;
        output = input;
        while (temp < output) {
            output = temp;
            temp = ((input / output) * 2) / 2;
        }
    }

    function getDistance(
        int256 _lat,
        int256 _lon
    ) private view returns (int256 dist) {
        int256 x = _lat - empContractStatus[msg.sender].cenLat;
        int256 y = _lon - empContractStatus[msg.sender].cenLon;
        dist = sqrt(x**2 + y**2);
        return dist;
    }

    ///////////////////////////////////////////////////////////////
    // only employer has access
    function setAccount(
        address _empAddr,
        int256 _cenLat,
        int256 _cenLon,
        int256 _radius,
        uint8 _payAmount,
        uint8 _reqAmount
        // Should also set the duration the contract will be checking for
        ) public onlyEmployer() {
            employees.push(_empAddr); // should delete if it is already in the list
            empContractStatus[_empAddr].cenLat = _cenLat;
            empContractStatus[_empAddr].cenLon = _cenLon;
            empContractStatus[_empAddr].radius = _radius;
            empContractStatus[_empAddr].payAmount = _payAmount;
            empContractStatus[_empAddr].compCount = 0;
            empContractStatus[_empAddr].reqAmount = _reqAmount;
    }

    function updateStatus(
        int256 _lat, 
        int256 _lon
        ) public {
            int256 dist = getDistance(_lat, _lon);
            if (dist < empContractStatus[msg.sender].radius) {
                empContractStatus[msg.sender].compCount = empContractStatus[msg.sender].compCount + 1;
            }
    }

    function payMe(address payable _to) public payable onlyEmployee(_to) {
        require(empContractStatus[_to].compCount > empContractStatus[_to].reqAmount);
        bool sent = _to.send(empContractStatus[_to].payAmount);
        require(sent, "Failed to send Ether");
    }
    
    // function getEmpStatus(address _empAdd) public view returns (bool) {
    //     // For now it returns true if the update was successfull atlest once.
    //     if (empContractStatus[_empAdd].compCount > 3) return true;
    //     else return false;
    // }
}
