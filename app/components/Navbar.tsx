"use client";

import { useNavigation } from "@/lib/NavigationContext";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  const { isOpen, toggleMenu } = useNavigation();

  return (
    <div className="w-[95%] h-14 flex flex-row items-center max-w-screen-xl bg-[#1a2456] shadow-lg py-[1em] px-[0.5em] text-[#efc2b3] text-[1rem] font-semibold fixed top-3 mx-3 left-0 right-0 justify-between z-[1000]">
      <div className="flex flex-row gap-2">
        <h1>icon</h1>
        <Link href="/">MONOGRAM</Link>
      </div>
      <div className="flex gap-10 text-[10px] font-thin">
        <Link href="/how-it-works">HOW IT WORKS</Link>
        <div>WORKFLOWS</div>
        <Link href="/download">DOWNLOAD</Link>
        <Link href="/blog">BLOG</Link>
        <Link href="/support">SUPPORT</Link>
        <div>SHOP</div>
        <div className="flex flex-row gap-3">
          <div onClick={toggleMenu}>1</div>
          <div>USD</div>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 p-6`}
      ></div>
      {/* Partial Dark Overlay */}
      {isOpen && (
        <div
          className={`fixed top-0 right-64 h-full w-[calc(100%-16rem)] bg-black ${
            isOpen ? "bg-opacity-50" : "bg-opacity-0"
          } z-30 duration-500`}
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
