import React from "react";

interface Props {
  buttonText: string;
  onClick?: () => void;
  className?: string;
}

const AmberButton = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={`text-white ${props.className} bg-amber-500 rounded-full`}
    >
      {props.buttonText}
    </button>
  );
};

export default AmberButton;
