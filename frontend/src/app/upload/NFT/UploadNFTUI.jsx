"use client";

import React, { useState, useRef } from "react";
import Marketplace from "../../../Marketplace.json";
import { OnChangeFile, listNFT } from "./Functions.js";

import {
  uploadFileToIPFS,
  uploadJSONToIPFS,
} from "./../../../../../backend/pinata/pinata.js";

const UploadNFTUI = ({ onClose }) => {
  const fileInputRef = useRef(null);
  const [formParams, updateFormParams] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [fileURL, setFileURL] = useState(null);
  const ethers = require("ethers");
  const [message, updateMessage] = useState("");
  // const location = useLocation();

  //This function uploads the NFT image to IPFS
  async function OnChangeFile(e) {
    let file = e.target.files[0];
    //check for file extension
    try {
      //upload the file to IPFS

      updateMessage("Uploading image.. please dont click anything!");
      const response = await uploadFileToIPFS(file);
      if (response.success === true) {
        updateMessage("");
        console.log("Uploaded image to Pinata: ", response.pinataURL);
        setFileURL(response.pinataURL);
      }
    } catch (e) {
      console.log("Error during file upload", e);
    }
  }

  //This function uploads the metadata to IPFS
  async function uploadMetadataToIPFS() {
    const { name, description, price } = formParams;
    //Make sure that none of the fields are empty
    if (!name || !description || !price || !fileURL) {
      updateMessage("Please fill all the fields!");
      return -1;
    }

    const nftJSON = {
      name,
      description,
      price,
      image: fileURL,
    };

    try {
      //upload the metadata JSON to IPFS
      const response = await uploadJSONToIPFS(nftJSON);
      if (response.success === true) {
        console.log("Uploaded JSON to Pinata: ", response);
        return response.pinataURL;
      }
    } catch (e) {
      console.log("error uploading JSON metadata:", e);
    }
  }

  async function listNFT(e) {
    e.preventDefault();

    //Upload data to IPFS
    try {
      const metadataURL = await uploadMetadataToIPFS();
      if (metadataURL === -1) return;
      //After adding your Hardhat network to your metamask, this code will get providers and signers
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      updateMessage(
        "Uploading NFT(takes 5 mins).. please dont click anything!"
      );

      //Pull the deployed contract instance
      let contract = new ethers.Contract(
        Marketplace.address,
        Marketplace.abi,
        signer
      );

      //massage the params to be sent to the create NFT request
      const price = ethers.utils.parseUnits(formParams.price, "ether");
      let listingPrice = await contract.getListPrice();
      listingPrice = listingPrice.toString();

      //actually create the NFT
      let transaction = await contract.createToken(metadataURL, price, {
        value: listingPrice,
      });
      await transaction.wait();

      alert("Successfully listed your NFT!");

      updateMessage("");
      updateFormParams({ name: "", description: "", price: "" });
      window.location.replace("/");
    } catch (e) {
      alert("Upload error " + e);
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 ">
      <div className="bg-gradient-to-tl from-black to-blue-950 opacity-100 rounded-3xl p-8 h-[40rem]  text-blue-100">
        <h2 className="text-xl mb-4 flex justify-center">
          Upload your NFT to the MarketPlace
        </h2>

        <div className="flex flex-col">
          <span>NFT Name</span>
          <input
            placeholder="Axie#4563"
            className=" h-12 text-black pl-4 rounded-md"
            type="text"
            onChange={(e) =>
              updateFormParams({ ...formParams, name: e.target.value })
            }
            value={formParams.name}
          />
        </div>

        <div className="flex flex-col mt-5">
          <span>NFT Description</span>

          <textarea
            placeholder="Axie Infinity Collection"
            name="description"
            id="test"
            rows={4}
            value={formParams.description}
            onChange={(e) =>
              updateFormParams({ ...formParams, description: e.target.value })
            }
            className="text-black rounded-md peer block min-h-[auto] w-full border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:peer-focus:text-primary"
          ></textarea>
        </div>

        <div className="flex flex-col mt-5">
          <span>Price (in ETH)</span>
          <input
            className=" h-12 text-black pl-4 rounded-md"
            type="text"
            placeholder="Min 0.01 ETH"
            value={formParams.price}
            onChange={(e) =>
              updateFormParams({ ...formParams, price: e.target.value })
            }
          />
        </div>
        <input
          type="file"
          className="my-8"
          ref={fileInputRef}
          onChange={(e) => {
            OnChangeFile(e);
          }}
        />
        <button
          onClick={(e) => {
            listNFT(e);
          }}
          className="mr-2 bg-red-500  text-white px-4 py-2 rounded"
        >
          Upload Image
        </button>
        <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default UploadNFTUI;
