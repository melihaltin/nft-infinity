import React from "react";

interface Props {
  linkName: string;
  linkPath: string;
  isSelect: boolean;
}

const NavbarLink = (props: Props) => {
  return (
    <a
      href={props.linkPath}
      className={
        !props.isSelect
          ? "text-textGray mr-16"
          : `text-white bg-darkGray py-1 px-3.5 rounded-full mr-12`
      }
    >
      {props.linkName}
    </a>
  );
};

export default NavbarLink;
