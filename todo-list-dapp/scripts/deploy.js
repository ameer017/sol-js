const hre = require("hardhat");

async function main() {
  const todolist = await hre.ethers.deployContract("ToDoList");
  await todolist.waitForDeployment();
  console.log(`Cupcake vending machine deployed to ${todolist.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
