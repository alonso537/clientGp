"use client";

import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import MenuHm from "./MenuHm";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="flex items-center justify-between p-5 bg-sky-800 relative">
      {/* Menu Hamburgesa */}
      <div className="flex items-center gap-5">
        <MdMenu
          onClick={handleMenu}
          className="text-white cursor-pointer transition-all duration-200 hover:scale-95 hover:opacity-90"
          size={30}
        />

        {/* logo */}
        <span className="text-white text-2xl font-bold">GP</span>
      </div>

      {/* name = 'Menu' */}
      <div>
        <h4 className="text-xl text-sky-100 font-semibold">Alejandro Alonso</h4>
      </div>

      {/* Menu */}
      <MenuHm handleMenu={handleMenu} menu={menu} />
    </div>
  );
};

export default Nav;
