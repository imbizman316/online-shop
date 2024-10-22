"use client";
import React, { useState } from "react";

export const slideMenus = [
  { id: 1, title: "WHAT IS CREATIVE CONSOLE?", link: "" },
  { id: 2, title: "WHY MONOGRAM?", link: "" },
  { id: 3, title: "MEET THE MODULES", link: "" },
  { id: 4, title: "WORKFLOWS", link: "" },
  { id: 5, title: "SOFTWARE INTEGRATIONS", link: "" },
  { id: 6, title: "OUR GUARANTEE", link: "" },
  { id: 7, title: "REVIEWS", link: "" },
];

function SideMenus({ scrollToSection }) {
  const [spreadMenu, setSpreadMenu] = useState(false);
  const [changeGap, setChangeGap] = useState(false);

  const handleMouseEnter = () => {
    setSpreadMenu(true);

    setTimeout(() => {
      setChangeGap(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    setSpreadMenu(false);
    setTimeout(() => {
      setChangeGap(false);
    }, 500);
  };

  return (
    <>
      <div
        className={`h-screen w-full bg-blue-950 fixed top-0 duration-300 ${
          changeGap ? "opacity-40" : "opacity-5"
        }`}
      >
        h
      </div>

      <div
        className="fixed right-0 flex flex-row gap-5 items-center justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex flex-col duration-200 z-10"
          style={{
            gap: changeGap ? 10 : 5,
          }}
        >
          {slideMenus.map((menu) => (
            <div
              key={menu.id}
              className="flex flex-row justify-end font- text-xl items-center"
            >
              <div
                className="duration-300 text-white cursor-pointer"
                style={{
                  width: spreadMenu ? "300px" : 0,
                  height: "30px",
                  overflow: "hidden",
                }}
                onClick={scrollToSection}
              >
                {menu.title}
              </div>
              <div className="bg-white h-2 w-2 rounded-full mr-6 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SideMenus;

// {isOpen && (
//   <div
//     className={`fixed top-0 right-64 h-full w-[calc(100%-16rem)] bg-black ${
//       isOpen ? "bg-opacity-50" : "bg-opacity-0"
//     } z-30 duration-500`}
//     onClick={toggleMenu}
//   ></div>
// )}
