import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// components : 
import Menus from "../data/menus";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`${
        open ? "w-72 bg-dark-purple" : "w-20 bg-dark-purple-2"
      } p-5 pt-8 duration-300 h-screen top-0 sticky `}
    >
      {/* control-logo */}
      <div
        className={`absolute flex items-center cursor-pointer rounded-full -right-3 top-9 p-1 bg-white border-2 border-dark-purple ${
          !open && "rotate-180"
        }`}
      >
        <Image
          src="/images/control-logo.png"
          width={16}
          height={16}
          onClick={() => setOpen(!open)}
        />
      </div>
      {/* site-logo-name */}
      <div className="flex gap-x-4 items-center">
        <Image
          src="/images/logo-tsr.png"
          width={32}
          height={32}
          className={`cursor-pointer duration-500`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-500 ${
            !open && "hidden"
          }`}
        >
          Developer
        </h1>
      </div>
      {/* nav-links */}
      <ul className="pt-6">
        {Menus.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <li
              key={index}
              className={`flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                menu.gap ? "mt-9" : "mt-2"
              } ${index === 0 && "bg-light-white"}`}
            >
              <span className={`text-[24px] text-gray-300`}>{menu.logo}</span>
              <span
                className={`text-gray-300 text-sm origin-left duration-200 ${
                  !open && "hidden"
                }`}
              >
                {menu.title}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
