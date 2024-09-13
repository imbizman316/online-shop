"use client";

import { useNavigation } from "@/lib/NavigationContext";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import SlideBox from "./navbar/SlideBox";
import CurrencyDropdown from "./navbar/CurrencyDropdown";

function Navbar() {
  const { isOpen, toggleMenu } = useNavigation();

  const { totalCount } = useNavigation();

  return (
    <div className="w-[calc(100%-2.5rem)] h-14 mx-5 flex flex-row items-center bg-[#1a2456] shadow-lg py-[1em] text-[#efc2b3] text-[1rem] font-semibold fixed top-3 left-0 right-0 z-[1000]">
      {/* Container for centering content with padding */}
      <div className="container mx-auto flex justify-between items-center px-[0.5em]">
        <div className="flex flex-row gap-2">
          <h1>icon</h1>
          <Link href="/">MONOGRAM</Link>
        </div>
        <div className="flex gap-10 text-[10px] font-thin justify-center items-center">
          <Link href="/how-it-works">HOW IT WORKS</Link>
          <div>WORKFLOWS</div>
          <Link href="/download">DOWNLOAD</Link>
          <Link href="/blog">BLOG</Link>
          <Link href="/support">SUPPORT</Link>
          <div>SHOP</div>
          <div className="flex flex-row gap-3">
            <div
              className="cursor-pointer items-center justify-center flex relative"
              onClick={toggleMenu}
            >
              <HiOutlineShoppingBag size={36} />
              <h1 className="absolute text-lg top-2">{totalCount}</h1>
            </div>
            <CurrencyDropdown />
          </div>
        </div>
      </div>
      {/* Slide-out menu */}
      <SlideBox />
      {/* <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 p-6`}
      ></div>
      {/* Partial Dark Overlay */}
      {/* {isOpen && (
        <div
          className={`fixed top-0 right-64 h-full w-[calc(100%-16rem)] bg-black ${
            isOpen ? "bg-opacity-50" : "bg-opacity-0"
          } z-30 duration-500`}
          onClick={toggleMenu}
        ></div>
      )}  */}
    </div>
  );
}

export default Navbar;
