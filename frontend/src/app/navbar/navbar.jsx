"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavbarLink from "./components/navbarlink";
import AmberButton from "@/app/home/components/buttons/AmberButton";

const Navbar = (props) => {
  const [walletAddress, setWalletAddress] = useState("Connect Wallet");
  const [connected, toggleConnect] = useState(false);
  // const location = useRouter();

  async function connectWallet() {
    const ethers = require("ethers");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    setWalletAddress(address);
  }

  async function connectWebsite() {
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    if (chainId !== "0x5") {
      //alert('Incorrect network! Switch your metamask network to Rinkeby');
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x5" }],
      });
    }
    await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then(() => {
        // updateButton();
        console.log("here");
        getAddress();
        window.location.replace(location.pathname);
      });
  }

  useEffect(() => {
    if (window.ethereum == undefined) return;
    let val = window.ethereum.isConnected();
    if (val) {
      console.log("here");
      connectWallet();
      toggleConnect(val);
      // updateButton();
    }

    window.ethereum.on("accountsChanged", function (accounts) {
      window.location.replace(location.pathname);
    });
  });

  return (
    <nav className="flex flex-row items-center justify-between relative">
      <Image
        className="ml-16"
        src="../logos/logo.svg"
        alt="Logo"
        width={164}
        height={100}
        priority
      />
      <AmberButton
        onClick={() => {
          connected ? connectWebsite() : null;
        }}
        buttonText={connected ? walletAddress : "Connect Wallet"}
        className="h-14 px-4 w-auto"
      />
      <div className="flex flex-row mr-24 text-sm items-center mt-5">
        <NavbarLink
          linkName="Home"
          linkPath="/home"
          isSelect={props.name === "Home"}
        />
        <NavbarLink
          linkName="Explore"
          linkPath="#"
          isSelect={props.name === "Explore"}
        />
        <NavbarLink
          linkName="About"
          linkPath="#"
          isSelect={props.name === "About"}
        />
        <NavbarLink
          linkName="Profile"
          linkPath="/profile"
          isSelect={props.name === "Profile"}
        />
        <Image
          className=""
          src="../icons/search/search.svg"
          alt="Logo"
          width={24}
          height={24}
          priority
        />
      </div>
    </nav>
  );
};

export default Navbar;
