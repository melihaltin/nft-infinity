import React from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const TrendNFTBg = (props: Props) => {
  return (
    <div
      className={`w-[22.67678rem] h-[31.2664rem] bg-[#1B1B21] ${props.className} flex flex-col justify-start rounded-lg px-5`}
    >
      {props.children}
    </div>
  );
};

export default TrendNFTBg;
