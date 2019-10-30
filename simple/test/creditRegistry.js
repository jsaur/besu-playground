// test/creditRegistry.js
var CreditRegistry = artifacts.require('CreditRegistry');

contract('CreditRegistry', function() {

    let did1 = "did:1";
    let did2 = "did:2";
    let hash1 = "hash:1";
    let hash2 = "hash:2";
    let hash3 = "hash:3";

    it('save hash1 for did1', async function() {
        let instance = await CreditRegistry.deployed();
        let transaction = await instance.addCreditHash(web3.utils.utf8ToHex(did1), web3.utils.utf8ToHex(hash1));
        assert.isDefined(transaction.tx, 'Should have a tx number on add');
    });

    it('read hash1 for did1', async function() {
        let instance = await CreditRegistry.deployed();
        let returnedBytes = await instance.readCreditHashes(web3.utils.utf8ToHex(did1));
        let returnedHash = web3.utils.hexToUtf8(returnedBytes[0]);
        assert.equal(returnedHash, hash1, 'Should have read hash1');
    });

    it('save hash2 for did1', async function() {
        let instance = await CreditRegistry.deployed();
        let transaction = await instance.addCreditHash(web3.utils.utf8ToHex(did1), web3.utils.utf8ToHex(hash2));
        assert.isDefined(transaction.tx, 'Should have a tx number on add');
    });

    it('read hash2 for did1', async function() {
        let instance = await CreditRegistry.deployed();
        let returnedBytes = await instance.readCreditHashes(web3.utils.utf8ToHex(did1));
        let returnedHash = web3.utils.hexToUtf8(returnedBytes[1]); // Second element
        assert.equal(returnedHash, hash2, 'Should have read hash2');
    });

    it('save hash3 for did2', async function() {
        let instance = await CreditRegistry.deployed();
        let transaction = await instance.addCreditHash(web3.utils.utf8ToHex(did2), web3.utils.utf8ToHex(hash3));
        assert.isDefined(transaction.tx, 'Should have a tx number on add');
    });

    it('read hash3 for did2', async function() {
        let instance = await CreditRegistry.deployed();
        let returnedBytes = await instance.readCreditHashes(web3.utils.utf8ToHex(did2));
        let returnedHash = web3.utils.hexToUtf8(returnedBytes[0]);
        assert.equal(returnedHash, hash3, 'Should have read hash3');
    });

});
