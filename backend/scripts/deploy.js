const { ethers } = require("hardhat");
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  //get the signer that we will use to deploy
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  //Get the NFTMarketplace smart contract object and deploy it
  // const Marketplace = await ethers.getContractFactory("NFTMarketplace");
  // const marketplace = await Marketplace.deploy();

  const marketplace = await ethers.deployContract("NFTMarketplace", {
    gasPrice: 10000000000,
  });

  const address = await marketplace.getAddress();
  await console.log("NFTMarketplace deployed to:", address);

  console.log(marketplace.interface.format("json"));
  //Pull the address and ABI out while you deploy, since that will be key in interacting with the smart contract later
  const data = {
    address: address,
    abi: JSON.parse(marketplace.interface.format("json")),
  };

  //This writes the ABI and address to the marketplace.json
  //This data is then used by frontend files to connect with the smart contract
  fs.writeFileSync("./src/Marketplace.json", JSON.stringify(data));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
