const Blockchain = require("./Blockchain");

let avocoin = new Blockchain;

avocoin.createTxn(100, "0xm990", "001wmen")

avocoin.createNewBlock();
console.log(avocoin);