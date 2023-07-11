import React from "react";

interface Props {
  text: string;
  className?: string;
}

const NftDescriptionText = (props: Props) => {
  return (
    <div className={"text-gray-300 mb-10 " + props.className}>{props.text}</div>
  );
};

export default NftDescriptionText;
