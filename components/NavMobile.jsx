"use client";

import React, { useState, useEffect } from "react";
import { RiHomeFill, RiMenu2Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUser, FaEnvelope } from "react-icons/fa";

import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const links = [
  {
    icon: <RiHomeFill />,
    path: "home",
    name: "home",
    offset: 0,
  },
  {
    icon: <BiSolidFoodMenu />,
    path: "menu",
    name: "menu",
    offset: 0,
  },
  {
    icon: <FaUser />,
    path: "about",
    name: "about",
    offset: -50,
  },
  {
    icon: <RiHomeFill />,
    path: "contact",
    name: "contact",
    offset: 0,
  },
];
const NavMobile = ({ containerStyle, LinkStyle, iconStyle }) => {
  const [active, setActive] = useState(false);
  return (
    <div className={`${containerStyle}`}>
      {/* Nav trigger btn */}
      <div
        onClick={() => setActive(!active)}
        className="cursor-pointer outline-none"
      >
        <RiMenu2Line className="text-3xl text-white transition-all duration-200" />
      </div>
      <aside
        className={`${
          active ? "right-0" : "-right-full"
        } bg-black fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}
      >
        <div className=" h-full  ">
          {/* nav close btn */}
          <div
            onClick={() => setActive(false)}
            className="cursor-pointer text-4xl  w-10 h-10 text-white bg-green flex left-8 items-center justify-center"
          >
            <IoCloseOutline />
          </div>

          {/* Image */}
          <Link href="/">
            <Image
              src="/logo.svg"
              width={90}
              height={36}
              alt=""
              className="absolute right-[40%]"
            />
          </Link>
          {/* links */}
          <div>
            {links.map((links, index) => {
              return (
                <ScrollLink
                  key={index}
                  className="flex flex-col  items-center justify-center  "
                  to={links.path}
                  offset={links.offset}
                  smooth={false}
                >
                  <div className="mt-12 flex items-center justify-center flex-col">
                    <div className="text-3xl">{links.icon}</div>
                    <div className="uppercase">{links.name}</div>
                  </div>
                </ScrollLink>
              );
            })}
          </div>
          {/* btn */}
          <ScrollLink to="reservation" smooth offset={-150}>
            <Button
              variant="orange"
              className="flex justify-center items-center ml-[25%] mt-8 "
            >
              Book A Table
            </Button>
          </ScrollLink>
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
