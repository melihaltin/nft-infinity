"use client";

import { useState } from "react";
import TrendNft from "../trendNft/TrendNft";
import HomeBold from "../text/HomeBold";
import axios from "axios";
import { GetIpfsUrlFromPinata } from "../../../utils/utils";
import MarketplaceJSON from "../../../../Marketplace.json";
import { ExternalProvider } from "@ethersproject/providers";
import Link from "next/link";

declare global {
  interface Window {
    ethereum?: ExternalProvider;
  }
}

const Marketplace = () => {
  const [dataFetched, updateFetched] = useState(false);

  const sampleData = [{}];

  const sampleData2 = [
    {
      name: "Cool Guy",
      price: "0.5",
      liked: "120",
      seen: "500",
      time: "11h : 05m : 01s",
      image: "nfts/coolguy.svg",
      tokenId: 2,
    },

    {
      name: "Angry Dooge",
      price: "15",
      liked: "20",
      seen: "570",
      time: "14h : 7m : 01s",
      image: "nfts/angrydoogs.svg",
      tokenId: 3,
    },
    {
      name: "Angry Owl",
      price: "30.29",
      liked: "12",
      seen: "5002",
      time: "11h : 05m : 01s",
      image: "nfts/angryowl.svg",
      tokenId: 4,
    },
    {
      name: "Cool Lion",
      price: "80.97",
      liked: "100",
      seen: "1711",
      time: "11h : 05m : 01s",
      image: "nfts/coollioon.svg",
      tokenId: 5,
    },
    {
      name: "Hip45",
      price: "5",
      liked: "120",
      seen: "500",
      time: "11h : 05m : 01s",
      image: "nfts/hip45.svg",
      tokenId: 6,
    },
    {
      name: "Hyper Ape",
      price: "147",
      liked: "120",
      seen: "500",
      time: "11h : 05m : 01s",
      image: "nfts/hyperape.svg",
      tokenId: 7,
    },
  ];

  const [data, updateData] = useState(sampleData);

  async function getAllNFTs() {
    const ethers = require("ethers");

    //After adding your Hardhat network to your metamask, this code will get providers and signers

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // running on client and window + ethereum is avail
    const signer = provider.getSigner();

    console.log(provider);
    //Pull the deployed contract instance
    let contract = new ethers.Contract(
      MarketplaceJSON.address,
      MarketplaceJSON.abi,
      signer
    );

    // create an NFT Token
    let transaction = await contract.getAllNFTs();

    console.log(transaction);
    //Fetch all the details of every NFT from the contract and display
    const items = await Promise.all(
      transaction.map(async (i: any) => {
        let tokenURI = await contract.tokenURI(i.tokenId);
        tokenURI = GetIpfsUrlFromPinata(tokenURI);
        let meta = await axios.get(tokenURI);
        meta = meta.data;

        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.image,
          name: meta.name,
          description: meta.description,
        };
        return item;
      })
    );

    updateFetched(true);
    updateData(items);
  }

  if (!dataFetched) getAllNFTs();

  return (
    <div className="ml-10">
      <div className="flex flex-row mt-80 justify-between items-center">
        <HomeBold text="Trending NFTs this week" />
        <button
          onClick={() => getAllNFTs()}
          className="text-white border mr-64 border-white rounded-full w-[8.78rem] h-[2.5rem]"
        >
          More -{">"}
        </button>
      </div>

      <div className="grid grid-cols-3 grid-rows-none content-between justify-between mt-10  gap-y-14">
        {data.map((item, index) => {
          return <TrendNft data={item} key={index}></TrendNft>;
        })}

        {sampleData2.map((item, index) => {
          return <TrendNft data={item} key={index}></TrendNft>;
        })}
      </div>
    </div>
  );
};

export default Marketplace;
