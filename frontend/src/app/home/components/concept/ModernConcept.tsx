import React from "react";
import TrendNft from "../trendNft/TrendNft";
import InfoConcept from "./InfoConcept";
import AmberButton from "../buttons/AmberButton";
const ModernConcept = () => {
  const sampleData = [
    {
      name: "Cool Guy",
      price: "40.97",
      liked: "120",
      seen: "500",
      time: "11h : 05m : 01s",
      image: "nfts/coolguy.svg",
      className: "-skew-x-[-12deg] -skew-y-3 mt-24 opacity-70",
    },
    {
      name: "Angry Dooge",
      price: "15",
      liked: "20",
      seen: "570",
      time: "14h : 7m : 01s",
      image: "nfts/angrydoogs.svg",
      className: "-skew-x-6 -skew-y-3 absolute inset-0 ml-48",
    },
  ];

  return (
    <div className="grid grid-cols-2 mt-[28rem]">
      <div className="relative justify-center flex">
        <div className=" top-0 -left-4 w-full h-full bg-green-950 rounded-full filter blur-3xl absolute"></div>
        <div className="relative mr-48">
          {sampleData.map((item, index) => {
            return <TrendNft key={index} data={item}></TrendNft>;
          })}
        </div>
      </div>
      <div className="ml-44 mr-44">
        <InfoConcept
          boldText="Modern Consept and Clean"
          grayText="We strive to provide a secure, trusted, and accessible platform that
            makes it easy for anyone to get involved in the world of NFTs."
        />

        <div className="mt-10 ">
          <AmberButton
            className="h-[3.625rem] w-[11.325rem] "
            buttonText="Explore Now"
          />
        </div>
      </div>
    </div>
  );
};

export default ModernConcept;
