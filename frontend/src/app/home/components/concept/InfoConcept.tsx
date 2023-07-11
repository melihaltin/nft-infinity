import React from "react";
import HomeBold from "../text/HomeBold";
import Image from "next/image";
import GrayText from "../text/GrayText";
import AmberButton from "../buttons/AmberButton";

interface Props {
  className?: string;
  boldText: string;
  grayText: string;
}

const InfoConcept = (props: Props) => {
  return (
    <div className={`${props.className}`}>
      <div className="mb-11">
        <HomeBold text={`${props.boldText}`} />
      </div>
      <Image
        alt="line"
        src="shapes/line.svg"
        className="ml-14 mb-11"
        height={29}
        width={226}
      ></Image>
      <GrayText text={`${props.grayText}`} />
    </div>
  );
};

export default InfoConcept;
