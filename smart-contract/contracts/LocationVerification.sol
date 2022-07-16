// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract LBRC {
    address private employer;
    struct public EmployeeResponsibility {
        uint radius;
        string[2] location;
    }
    uint private status;
    address public minter;
    mapping (address => uint) public EmployeeStatuses;
    mapping (address => EmployeeResponsibility) public EmployeeResponsibilities

    string[2] location = ["long", "lat"]
    
    // Define a re-usable access modifier
    modifier onlyBy(address _account) {
        require(msg.sender == _account);
        _;
    }

    
    

    // only employer has access
    function setLocation(address employeeAddress, string[2] memory _loc, uint radius) public onlyBy(employer) {
        EmployeeResponsibility responsibility = EmployeeResponsibility(radius, _loc);
        EmployeeResponsibilities[employeeAddress] = responsibility;
    }

    function () public view returns (string memory) {
        return message;
    }

    function updateState(location) returns (bool) {
        if pass
            status ++;
    }

    function checkCompliance() returns (bool) {
        // checks state count
    }
}
