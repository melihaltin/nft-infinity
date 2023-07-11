import React from "react";

interface BoldtextProps {
  text: string;
  link?: string;
}

const Boldtext: React.FC<BoldtextProps> = ({ text, link }) => {
  return (
    <a href={link} className="text-lg font-bold">
      {text}
    </a>
  );
};

export default Boldtext;
