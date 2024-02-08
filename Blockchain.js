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
      timestamp: Date.now(),
      txn: [],
      nonce: 0,
      hash: "hash",
      prevBlockHash: "prevBlockHash",
    };
  }

  //   get last block
  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  //   generate hash
  generateHash(prevBlockHash, timestamp, pendingTxn) {
    let hash = "";
    let nonce = 0;

    while (hash.substring(0, 3) !== "000") {
      nonce++;
      hash = SHA256(
        prevBlockHash + timestamp + JSON.stringify(pendingTxn) + nonce
      ).toString();
    }

    return { hash, nonce };
  }

  createTxn(amount, sender, recipient) {
    this.pendingTxn.push({ amount, sender, recipient });
  }

  createNewBlock() {
    const timestamp = Date.now();
    const txn = this.pendingTxn;
    const prevBlockHash = this.getLastBlock().hash;
    const generateHash = this.generateHash(prevBlockHash, timestamp, txn);

    const newBlock = {
      index: this.chain.length + 1,
      timestamp,
      txn,
      nonce: generateHash.nonce,
      hash: generateHash.hash,
      prevBlockHash,
    };

    this.pendingTxn = [];
    this.chain.push(newBlock);

    return newBlock;
  }
}

module.exports = Blockchain;
