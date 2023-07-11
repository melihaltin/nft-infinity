import React from "react";
import Image from "next/image";
import AmberButton from "../buttons/AmberButton";
import TrendNFTBg from "./TrendNFTBg";
import Link from "next/link";

const TrendNft = (data) => {
  // const IPFSUrl = GetIpfsUrlFromPinata(data.data.image);

  const to = "/nftpage/" + data.data.tokenId;

  return data.data === undefined ? (
    <div></div>
  ) : (
    <Link href={to}>
      <TrendNFTBg className={data.data.className}>
        <Image
          alt="nft"
          src={data.data.image}
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
            <div className="text-white text-lg">{data.data.name} </div>
            <div className="text-[#D5F70A] text-3xl">{data.data.price} ETH</div>
          </div>
          <AmberButton className="" buttonText="Buy Now" />
        </div>
      </TrendNFTBg>
    </Link>
  );
};

export default TrendNft;
