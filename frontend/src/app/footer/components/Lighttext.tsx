import React from "react";

interface LighttextProps {
  text: string;
  link?: string;
}

const Lighttext: React.FC<LighttextProps> = ({ text, link }) => {
  return (
    <a href={link} className="text-lg">
      {text}
    </a>
  );
};

export default Lighttext;
