const SHA256 = require("sha256");

// console.log(SHA256("man").toString());

// let hash = "";
// let nonce = 0;

// while (hash.substring(0,3) !== "000") {

//     nonce++;

//     hash = SHA256("man" + nonce).toString()
// }

// console.log(nonce);
// console.log("\n");
// console.log(hash)

// OOP uses class
class Blockchain {
  //this is like declaring contract in solidity

  constructor() {
    this.chain = [this.createGenesisBlock()]; //keep track of all the block that have been added
    this.pendingTxn = []; //keep track of all txn that has not been added to the block
  }

  createGenesisBlock() {
    return {
      index: 1,
      timestamp : Date.now(),
      txn: [],
      nonce: 0,
      hash: "hash",
      prevBlockHash: "prevBlockHash"
    };
  }
}


module.exports = Blockchain;