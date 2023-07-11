import React from "react";
import Image from "next/image";
import Boldtext from "./components/Boldtext";
import Lighttext from "./components/Lighttext";
const Footer = () => {
  return (
    <footer className="text-white grid grid-cols-2">
      <div className="flex flex-col justify-center ml-16">
        <Image
          className=""
          src="logos/logo.svg"
          alt="Logo"
          width={164}
          height={100}
          priority
        />
        2023 NFT INFINITY CO.
      </div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-8 grid-rows-5 mt-40">
        <Boldtext link="#" text="Location" />
        <Boldtext link="#" text="Contact" />
        <Boldtext link="#" text="Legals" />
        <Lighttext link="#" text="America" />
        <Lighttext link="#" text="About Me" />
        <Lighttext link="#" text="Privacy" />
        <Lighttext link="#" text="Asia" />
        <Lighttext link="#" text="Teams" />
        <Lighttext link="#" text="Disclaimer" />
        <Lighttext link="#" text="Europe" />
        <Lighttext link="#" text="Profile" />
        <Lighttext link="#" text="Terms" />
        <Lighttext link="#" text="Africe" />
        <Lighttext link="#" text="FAQ" />
        <Lighttext link="#" text="Company" />
      </div>
    </footer>
  );
};

export default Footer;
