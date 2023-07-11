"use client";

import React, { useState } from "react";
import Image from "next/image";
import HomeBold from "@/app/home/components/text/HomeBold";
import MarketplaceJSON from "@/Marketplace.json";
import { useParams } from "react-router-dom";
import axios from "axios";
import TrendNFTBg from "@/app/home/components/trendNft/TrendNFTBg";
import Navbar from "@/app/navbar/navbar";
const Page = () => {
  const [dataFetched, updateFetched] = useState(false);
  const [data, updateData] = useState([]);
  const [address, updateAddress] = useState("0x");
  const [totalPrice, updateTotalPrice] = useState("0");

  async function getNFTData(tokenId) {
    const ethers = require("ethers");
    let sumPrice = 0;

    //After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    console.log("Signer: ", signer);

    const addr = await signer.getAddress();

    //Pull the deployed contract instance
    let contract = new ethers.Contract(
      MarketplaceJSON.address,
      MarketplaceJSON.abi,
      signer
    );

    //create an NFT Token
    let transaction = await contract.getMyNFTs();

    /*
     * Below function takes the metadata from tokenURI and the data returned by getMyNFTs() contract function
     * and creates an object of information that is to be displayed
     */

    const items = await Promise.all(
      transaction.map(async (i) => {
        const tokenURI = await contract.tokenURI(i.tokenId);
        console.log("tokenURI: ", tokenURI);

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
        sumPrice += Number(price);
        return item;
      })
    );

    updateData(items);
    updateFetched(true);
    updateAddress(addr);
    updateTotalPrice(sumPrice.toPrecision(3));
  }

  const params = useParams();
  const tokenId = params.tokenId;
  if (!dataFetched) getNFTData(tokenId);

  return (
    <main>
      <Navbar name="Profile" />

      <div className="ml-10">
        <div className="flex flex-row mt-80 text-center">
          <HomeBold text="My NFTs" />
        </div>
        <div className="grid grid-cols-3 grid-rows-none content-between justify-between mt-10  gap-y-14">
          {data.map((data, index) => {
            return (
              <TrendNFTBg key={index} className={""}>
                <Image
                  alt="nft"
                  src={data.image}
                  className="place-self-center mt-3"
                  width={318.85}
                  height={318.85}
                ></Image>
                <div className="flex flex-row justify-between text-white mt-5">
                  <div className="flex flex-row items-center gap-2">
                    <Image
                      alt="watch"
                      src="icons/nftcard/watch.svg"
                      className="place-self-start"
                      width={24.74}
                      height={24.74}
                    ></Image>
                    11h : 23m : 45s
                  </div>

                  <div className="flex flex-row items-center justify-between gap-2">
                    <Image
                      alt="hearth"
                      src="icons/nftcard/hearth.svg"
                      className="place-self-start"
                      width={24.74}
                      height={24.74}
                    ></Image>
                    54
                    <Image
                      alt="hearth"
                      src="icons/nftcard/seen.svg"
                      className="place-self-start"
                      width={24.74}
                      height={24.74}
                    ></Image>
                    104
                  </div>
                </div>

                <div className="bg-white w-full h-[0.02rem] mt-5 opacity-60"></div>

                <div className="grid grid-cols-2 mt-5">
                  <div className="flex flex-col">
                    <div className="text-white text-lg">{data.name} </div>
                    <div className="text-[#D5F70A] text-3xl">
                      {data.price} ETH
                    </div>
                  </div>

                  {/* <AmberButton className="" buttonText="Buy Now" /> */}
                </div>
              </TrendNFTBg>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Page;
