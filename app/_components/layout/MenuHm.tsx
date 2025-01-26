import React from "react";
import MenuList from "./MenuList";

interface Props {
  handleMenu: () => void;
  menu: boolean;
}

const MenuHm = ({ handleMenu, menu }: Props) => {
  return (
    <>
      <div
        onClick={handleMenu}
        className={`absolute top-0 ${
          !menu ? "hidden" : "block"
        } left-0 w-full h-screen z-10 bg-white opacity-20`}
      ></div>
      <div
        className={`absolute top-0 left-0  ${
          !menu
            ? "-translate-x-full"
            : "translate-x-0 w-2/3 md:w-1/4 transition-all duration-200 ease "
        }   h-screen bg-sky-800 border-r-2 p-5 rounded-r-lg shadow-lg z-20`}
      >
        <MenuList handleClose={handleMenu} />
      </div>
    </>
  );
};

export default MenuHm;
