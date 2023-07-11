"use client";

import Navbar from "@/app/navbar/navbar";
import React, { useState } from "react";
import Image from "next/image";
import NftDescriptionText from "../components/NftDescriptionText";
import MarketplaceJSON from "@/Marketplace.json";
import { GetIpfsUrlFromPinata } from "@/app/utils/utils";
import axios from "axios";

const Page = ({ params }) => {
  const [data, updateData] = useState({});
  const [message, updateMessage] = useState("");
  const [currAddress, updateCurrAddress] = useState("0x");
  const [dataFetched, updateDataFetched] = useState(false);

  async function getNFTData(tokenId) {
    const ethers = require("ethers");
    //After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();

    console.log("Signer: ", signer);
    //Pull the deployed contract instance
    let contract = new ethers.Contract(
      MarketplaceJSON.address,
      MarketplaceJSON.abi,
      signer
    );

    console.log("contract: ", contract);
    //create an NFT Token
    console.log("tokenId: ", tokenId);
    var tokenURI = await contract.tokenURI(tokenId);
    const listedToken = await contract.getListedTokenForId(tokenId);
    tokenURI = GetIpfsUrlFromPinata(tokenURI);
    let meta = await axios.get(tokenURI);
    meta = meta.data;
    console.log(listedToken);

    let item = {
      price: meta.price,
      tokenId: tokenId,
      seller: listedToken.seller,
      owner: listedToken.owner,
      image: meta.image,
      name: meta.name,
      description: meta.description,
    };
    console.log(item);
    updateData(item);
    updateDataFetched(true);
    console.log("address", addr);
    updateCurrAddress(addr);
  }

  async function buyNFT(tokenId) {
    try {
      const ethers = require("ethers");
      //After adding your Hardhat network to your metamask, this code will get providers and signers
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      //Pull the deployed contract instance
      let contract = new ethers.Contract(
        MarketplaceJSON.address,
        MarketplaceJSON.abi,
        signer
      );
      const salePrice = ethers.utils.parseUnits(data.price, "ether");
      updateMessage("Buying the NFT... Please Wait (Upto 5 mins)");
      //run the executeSale function
      let transaction = await contract.executeSale(tokenId, {
        value: salePrice,
      });
      await transaction.wait();

      alert("You successfully bought the NFT!");
      updateMessage("");
    } catch (e) {
      alert("Upload Error" + e);
    }
  }

  const tokenId = params.tokenId;

  console.log("tokenId: ", tokenId);
  if (!dataFetched) getNFTData(tokenId);
  if (typeof data.image == "string")
    data.image = GetIpfsUrlFromPinata(data.image);

  console.log("data: ", data);
  return (
    <main>
      <Navbar />
      <div className="grid grid-cols-2 mt-32">
        <div className="h-full w-full items-center justify-center flex ">
          <Image
            src={data.image}
            className=""
            alt="test"
            width={634}
            height={634}
          ></Image>
        </div>

        <div className="h-[634px] w-[634px] border text-2xl border-blue-300 flex flex-col">
          <div className="mx-7 my-7 gap-7">
            <NftDescriptionText text={"Name: " + data.name} />
            <NftDescriptionText text={"Description: " + data.description} />
            <div className="flex flex-row text-center items-center">
              <NftDescriptionText text={"Owner: "} />
              <NftDescriptionText text={data.owner} className="text-xl ml-2" />
            </div>
            <div className="flex flex-row text-center items-center">
              <NftDescriptionText text={"Seller: "} />
              <NftDescriptionText text={data.seller} className="text-xl ml-2" />
            </div>

            <NftDescriptionText text={"Price: " + data.price + " ETH"} />

            <button
              onClick={() => {
                buyNFT(tokenId);
              }}
              className="w-full h-14 mt-24 rounded-xl bg-purple-900 text-white text-2xl"
            >
              BUY NFT
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
function updateDataFetched(arg0) {
  throw new Error("Function not implemented.");
}
