import React from "react";
import Image from "next/image";

interface Props {
  linkPath: string;
  whiteText: string;
  grayText1: string;
  grayText2: string;
  className: string;
}

const Parallelogram = (props: Props) => {
  return (
    <div className={`relative ${props.className}`}>
      <div className="w-[49rem] ml-16 h-[6rem] -skew-x-[-12deg] bg-gradient-to-r from-[#FFA12B] to-[#FFFFFF] opacity-5 inset-0 "></div>
      <div className="w-[49rem] ml-16 h-[6rem] -skew-x-[-12deg] border border-lime-500 inset-0 absolute  "></div>
      <div className="w-[49rem] ml-16 h-[6rem]  text-white absolute inset-0 flex flex-row justify-between items-center">
        <span className="flex flex-row items-center text-2xl">
          <Image
            className="ml-16 mr-5"
            src={props.linkPath}
            alt="icon"
            width={30}
            height={30}
          />
          {props.whiteText}
        </span>
        <span className="text-xl mr-4 text-[#BDBDBD]">
          {props.grayText1}
          <br />
          {props.grayText2}
        </span>
      </div>
    </div>
  );
};

export default Parallelogram;
