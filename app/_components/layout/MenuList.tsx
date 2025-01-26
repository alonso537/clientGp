"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CgClose } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";

interface Props {
  handleClose: () => void;
}

const NavLinks = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/projects",
    name: "Projects",
  },
  {
    href: "/users",
    name: "Users",
  },
];

const MenuList = ({ handleClose }: Props) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col justify-between gap-5 h-full">
      {/* logo y icono de cierre */}
      <div className="flex items-start gap-5 justify-between">
        <div></div>
        <span className="text-white text-2xl font-bold ">GP</span>
        <CgClose
          onClick={handleClose}
          className="text-white cursor-pointer transition-all duration-200 hover:scale-95 hover:opacity-90"
          size={30}
        />
      </div>

      {/* lista de links */}
      <ul className="flex flex-col items-center gap-y-7">
        {NavLinks.map((link) => (
          <Link href={link.href} className="w-full" key={link.href}>
            <li
              className={`font-semibold text-xl text-white transition-all duration-200 hover:bg-sky-200 hover:text-sky-800 hover:scale-105 p-2 rounded-lg w-full text-center cursor-pointer ${
                pathname === link.href &&
                "bg-sky-200 text-sky-800 w-full hover:scale-105"
              } `}
            >
              {link.name}
            </li>
          </Link>
        ))}
      </ul>

      {/* footer and settings */}
      <div className="flex justify-between items-center">
        <div></div>
        <span
            className="text-white text-sm font-semibold"
            style={{ opacity: 0.5 }}
        >
            All rights reserved &copy; {new Date().getFullYear()}
        </span>
        <div>
            <CiSettings className="text-white cursor-pointer transition-all duration-200 hover:scale-95 hover:opacity-90" size={30} />
        </div>
      </div>
    </div>
  );
};

export default MenuList;
