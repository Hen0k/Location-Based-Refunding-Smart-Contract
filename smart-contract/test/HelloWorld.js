const { assert } = require("chai")


const HelloWorld = artifacts.require("./HelloWorld.sol")

require("chai")
    .use(require("chai-as-promised"))
    .should()


contract('HelloWorld', ([contractOwner, secondAddress, thirdAddress]) => {
    // Setup the contract object
    let helloWorld

    before(async () => {
        helloWorld = await HelloWorld.deployed()
    })

    describe('deployment', () => {
        // check if it is deployed look if it gives you an address
        it('is deployed successfully', async () => {
            const address = await helloWorld.address
        
            assert.notEqual(address, '')
            assert.notEqual(address, undefined)
            assert.notEqual(address, null)
            assert.notEqual(address, 0x0)
        })
        
    })

    // Check if the accessor works
    describe('check accessor', () => {
        // check if it is deployed look if it gives you an address
        it('has a working accessor', async () => {
            const message = await helloWorld.getMessage()
        
            assert.notEqual(message, '')
            assert.notEqual(message, undefined)
            assert.notEqual(message, null)
            assert.notEqual(message, 0x0)    
        })
    })

    // Check if the setter works
    describe('check setter', () => {
        // check if it is deployed look if it gives you an address
        it('has a working setter', async () => {
            await helloWorld.setMessage("Test value")
            const message = await helloWorld.getMessage()
            assert.equal(message, "Test value")
        })
    })

    // check
})