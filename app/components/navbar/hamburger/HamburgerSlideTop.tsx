import { useNavigation } from "@/lib/NavigationContext";
import Link from "next/link";
import React from "react";
import navMenus from "@/data/navMenus";

function HamburgerSlideTop() {
  const { openHamburgerSlide, toggleHamburgerSlide } = useNavigation();

  console.log(openHamburgerSlide);

  return (
    <div>
      <div
        className={`fixed top-0 left-[-320px] h-full w-80 bg-[#1a2456] text-[#efc2b3] transform ${
          openHamburgerSlide ? "translate-x-[320px]" : "translate-x-[-320px]"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex items-center w-full justify-between p-2">
          <Link href="/" className="flex flex-row justify-center items-center">
            <div
              className="rotate-90"
              style={{
                backgroundImage:
                  "url(https://support.monogramcc.com/system/photos/360709460812/Untitled-1.png)",
                width: "55px",
                height: "55px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div>MONOGRAM</div>
          </Link>
          <div className="text-xl" onClick={toggleHamburgerSlide}>
            X
          </div>
        </div>
        <div className="flex flex-col w-full items-center pt-10">
          <div className="flex flex-col gap-5">
            {navMenus.map((menu, index) => (
              <Link key={index} href={menu.href}>
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {openHamburgerSlide && (
        <div
          className={`fixed top-0 left-64 h-full w-[calc(100%-16rem)] bg-black ${
            openHamburgerSlide ? "bg-opacity-50" : "bg-opacity-0"
          } z-30 duration-500`}
          onClick={toggleHamburgerSlide}
        ></div>
      )}
    </div>
  );
}

export default HamburgerSlideTop;
