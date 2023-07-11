"use client";

import Navbar from "@/app/navbar/navbar";
import Parallelogram from "@/app/home/components/Parallelogram";
import UploadNFTUI from "@/app/upload/NFT/UploadNFTUI";
import { closePopup, openPopup } from "@/app/home/functions/UploadPopUp";
import Marketplace from "@/app/home/components/marketplace/Marketplace";
import ModernConcept from "@/app/home/components/concept/ModernConcept";
import Footer from "@/app/footer/Footer";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <main>
      <Navbar name="Home"></Navbar>

      <div className="flex flex-row ml-16 mt-16">
        <div className="flex flex-col">
          <span className="text-7xl float-left text-white">
            Experience the Next Evolution of Collectibles
          </span>
          <span className="text-white text-opacity-70 text-3xl mt-6">
            Buy, Sell, and Trade NFTs
          </span>
          <div className="flex flex-row items-center gap-5 mt-8">
            <button className="w-36 h-12 bg-amber-500 rounded-full text-white ">
              Explore
            </button>

            <div className="text-white w-36 h-12 text-lg items-center justify-center flex cursor-pointer">
              Go to market -{">"}
            </div>
          </div>
        </div>
        <div className="ml-36 relative float-right w-full h-w-lg">
          <div className=" top-0 -left-4 w-[30rem] h-[30rem] bg-green-950 rounded-full filter blur-3xl"></div>
          <div className="">
            {/* <div className="w-[30.225rem] h-[30.46196rem] -skew-x-[-12deg] bg-gradient-to-r from-slate-900 to-green-950 transform skew-y-0">
            
            </div> */}
            <div className="absolute top-0 left-0 ">
              <Image
                src="ape/ape.svg"
                className=""
                alt="test "
                width={634}
                height={634}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <Parallelogram
          linkPath="icons/lock/Lock.svg"
          whiteText="Encrypted Security"
          className="justify-start"
          grayText2="system that is safe from name theft."
          grayText1={`Our platform has a strict security`}
        ></Parallelogram>
        <Parallelogram
          linkPath="icons/wallet/wallet.svg"
          whiteText="Fast Transaction"
          className="mt-24 ml-44"
          grayText2="We have an easy, fast, and certainly not "
          grayText1="complicated purchase transaction flow."
        ></Parallelogram>

        <div>
          <button
            className="w-96 h-20 bg-amber-500 rounded-full text-white mt-24 ml-44"
            onClick={() => openPopup(setPopupOpen)}
          >
            UPLOAD YOUR NFT
          </button>

          {isPopupOpen && (
            <UploadNFTUI onClose={() => closePopup(setPopupOpen)} />
          )}
        </div>
      </div>
      <Marketplace />

      <ModernConcept />

      <Footer />
    </main>
  );
};

export default Page;
