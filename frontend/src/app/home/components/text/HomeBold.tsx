import React from "react";

interface Props {
  text: string;
}

const HomeBold = (props: Props) => {
  return <div className="text-white text-6xl">{props.text}</div>;
};

export default HomeBold;
