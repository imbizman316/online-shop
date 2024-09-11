"use client";

import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import ProductsA from "./ProductsA";

function TopImage({ scrollToSection }) {
  return (
    <div
      className="flex justify-center items-center relative"
      style={{
        width: "100%",
        height: "600px",
        backgroundImage:
          "url(/images/keyboard_and_sound_equipment_1600x1200.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-65 z-10 h-[600px]" />
      <div className="relative z-20 items-center justify-center text-[rgb(241,224,212)]">
        <h1 className="text-4xl w-96 text-center font-bold">
          A CONSOLE FOR EVERY WORKFLOW
        </h1>
        <h1 className="text-center pt-5 font-semibold text-md">
          Discover the perfect console for yours
        </h1>
      </div>
      <IoIosArrowDown
        color="white"
        className="absolute z-20 bottom-0 mb-5 text-[40px] hover:text-[50px] duration-200 cursor-pointer"
        onClick={() => scrollToSection()}
      />
    </div>
  );
}

export default TopImage;
