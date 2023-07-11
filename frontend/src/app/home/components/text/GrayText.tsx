import React from "react";

interface Props {
  text: string;
}

const GrayText = (props: Props) => {
  return <div className="text-2xl text-textGray">{props.text}</div>;
};

export default GrayText;
