"use client";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const menu = [
  {
    img: "/menu/item-1.png",
    title: "Stilton and pancetta penne",
    price: "15.00$",
  },
  {
    img: "/menu/item-3.png",
    title: "horizo and avocado spaghetti",
    price: "18.25$",
  },
  {
    img: "/menu/item-2.png",
    title: "Crayfish and black pepper toastie",
    price: "20.14$",
  },
  {
    img: "/menu/item-4.png",
    title: "Orange and banana cookies",
    price: "16.45$",
  },
];

const Menu = () => {
  return (
    <section className="relative py-12 xl:py-24 bg-menu" id="menu">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          viewport={{ once: false, amount: 0.2 }}
          whileInView={"show"}
          className="max-w-[570px] mx:auto text-center xl:text-right"
        >
          <h2 className="mb-3">Favorite Menu</h2>
          <Link
            href="/"
            className="text-green flex text-center  xl:justify-end items-center mb-16 md:flex justify-center"
          >
            Wiew All
            <IoIosArrowRoundForward className="text-3xl" />
          </Link>
        </motion.div>
        {/* Grid Menu */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          viewport={{ once: false, amount: 0.2 }}
          whileInView={"show"}
          className="grid grid-cols-1 gap-[30px] md:grid-cols-3 md:gap-4  xl:grid-cols-4"
        >
          {menu.map((menu, index) => {
            return (
              <div
                key={index}
                className="max-w-[270px] bg-white shadow-primary mx-auto xl:mx-0 group:"
              >
                {/* Image */}
                <div className="overflow-hidden cursor-pointer">
                  <Image
                    src={menu.img}
                    width={270}
                    height={270}
                    alt=""
                    className="hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="pt-[28px]">
                  <Link href="/">
                    <h3 className="font-poppins text-black mb-[24px]" href="">
                      {menu.title}
                    </h3>
                  </Link>
                  <div>
                    <h3 className="text-orange">Price: {menu.price}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
