"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-footer bg-cover bg-no-repeat text-white pt-16 ">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between xl:flex-row">
          {/* logo */}
          <div className="w-[300px] mb-8 xl:mb-0">
            <Link href="/">
              <Image src="/logo.svg" width={90} height={36} alt="" />
            </Link>
          </div>
          {/* grid İtem */}
          <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16">
            {/* blog */}
            <div>
              <h4 className="font-semibold mb-5">Blog</h4>
              <ul className="flex flex-col gap-[30px] text-sm">
                <li>
                  <Link href="/">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quasi, sit!{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quasi, sit!{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quasi, sit!{" "}
                  </Link>
                </li>
              </ul>
            </div>
            {/* İtem */}
            <div>
              <h4 className="font-semibold mb-5">New Item</h4>
              <ul className="flex flex-col gap-[30px] text-sm">
                <li>
                  <Link href="/">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quasi, sit!{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quasi, sit!{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quasi, sit!{" "}
                  </Link>
                </li>
              </ul>
            </div>
            {/* Socials */}
            <div>
              <div className="flex flex-col gap-[20px]">
                <h4>Socials</h4>
                <ul className="flex flex-col gap-[20px]">
                  <li>
                    <Link href="/">Instagram</Link>
                  </li>
                  <li>
                    <Link href="/">FaceBook</Link>
                  </li>
                  <li>
                    <Link href="/">Twitter</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
