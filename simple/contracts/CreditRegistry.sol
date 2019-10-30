pragma solidity ^0.5.0;

contract CreditRegistry {

    mapping(bytes32 => bytes32[]) registry;
    
    /**
     * Appends the credit hash to the credit array associated with the given DID
     */
    function addCreditHash(bytes32 did, bytes32 hash) public {
        if (registry[did].length == 0) {
            registry[did] = [hash];
        } else {
            registry[did].push(hash);
        }
    }

    /**
     * Reads all the credit hashes associated with the given did
     * TODO we also want to keep track of each credit read PRO-798
     */
    function readCreditHashes(bytes32 did) public view returns (bytes32[] memory) {
        return registry[did];
    }
}