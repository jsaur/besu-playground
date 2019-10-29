// test/adoption.js
var Adoption = artifacts.require('Adoption');

contract('Adoption', function(accounts) {
  it('adopt the pet ID 8', async function() {
    let instance = await Adoption.deployed();
    let id = (await instance.adopt.call(8)).toNumber();
    assert.equal(id, 8, 'Adoption of pet ID 8 should be recorded.');
  });
  it('should throw if pet ID is > 15', async function() {
    try {
      let instance = await Adoption.deployed();
      await instance.adopt(16);
    } catch (error) {
      assert.include(
        error.message,
        'revert',
        'Adopt a pet with ID 16 throw an exception'
      );
    }
  });
  it('should throw if pet ID is < 0', async function() {
    try {
      let instance = await Adoption.deployed();
      await instance.adopt(-1);
    } catch (error) {
      assert.include(
        error.message,
        'revert',
        'Adopt a pet with ID -1 throw an exception'
      );
    }
  });
  it('retrieves the adopter for a unadopted pet', async function() {
    let instance = await Adoption.deployed();
    let adopter = await instance.adopters(7);
    assert.equal(
      adopter,
      0x0000000000000000000000000000000000000000,
      'Owner of pet ID 8 should not be recorded.'
    );
  });
  it('retrieves the adopter for a adopted pet', async function() {
    let instance = await Adoption.deployed();
    await instance.adopt(8, {
      from: '0xfe3b557e8fb62b89f4916b721be55ceb828dbd73'
    });
    let adopter = await instance.adopters(8);
    assert.equal(
      adopter,
      0xfe3b557e8fb62b89f4916b721be55ceb828dbd73,
      'Owner of pet ID 8 should be recorded.'
    );
  });
  it('retrieves all adopters', async function() {
    let instance = await Adoption.deployed();
    await instance.adopt(8, {
      from: '0xfe3b557e8fb62b89f4916b721be55ceb828dbd73'
    });
    let adopters = await instance.getAdopters.call();
    assert.equal(
      adopters[7],
      0x0000000000000000000000000000000000000000,
      'Owner of pet ID 7 should not be recorded.'
    );
    assert.equal(
      adopters[8],
      0xfe3b557e8fb62b89f4916b721be55ceb828dbd73,
      'Owner of pet ID 8 should be recorded.'
    );
  });
});