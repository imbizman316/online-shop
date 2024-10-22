"use client";

import React, { useEffect, useRef, useState } from "react";
import WhatIsCS from "../components/how-it-works/WhatIsCS";
import SplitLeft from "../components/how-it-works/SplitLeft";
import SplitRight from "../components/how-it-works/SplitRight";
import SideMenus from "../components/how-it-works/SideMenus";
import Button from "../components/how-it-works/Button";

function HowItWorks() {
  const creativeConsoleRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    creativeConsoleRef.current?.scrollIntoView({
      behavior: "smooth",
    });
    console.log("scroll");
  };

  const [reduceRate, setReduceRate] = useState(1);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const newReduceRate = Math.max(1 - scrollTop / 900, 0);
    setReduceRate(newReduceRate);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pt-32 w-full flex flex-col items-center min-h-screen">
      {/* Fixed section with MONOGRAM text */}
      <div className="fixed top-0 w-full h-full px-10 z-[-1]">
        {/* Background container */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "url(https://tse3.mm.bing.net/th?id=OIG1.EsW6jzMlYsS2mHLiEede&pid=ImgGn)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: `brightness(${0.08 / reduceRate})`,
            zIndex: -2,
          }}
        />

        {/* Content container */}
        <div className="relative flex flex-col items-center justify-center gap-2 w-full h-full">
          <h1
            className="text-white"
            style={{
              fontSize: `${80 * reduceRate}px`,
              opacity: 1 * reduceRate,
            }}
          >
            MONOGRAM 주사맞아라
          </h1>
          <div
            style={{
              fontSize: `${100 * reduceRate}px`,
              opacity: 1 * reduceRate,
              color: "white",
            }}
          >
            CREATIVE CONSOLE
          </div>
          <div
            style={{
              fontSize: `${30 * reduceRate}px`,
              opacity: 1 * reduceRate,
              color: "white",
            }}
          >
            Simple. Powerful. Adaptable. A better way to create.
          </div>
        </div>
      </div>

      {/* Spacer to allow scrolling */}
      <div style={{ height: "100vh" }} />

      {/* Content components */}
      <WhatIsCS ref={creativeConsoleRef} />
      <div className="flex w-full">
        <SplitLeft />
        <SplitRight />
      </div>

      {/* Extra spacer at the bottom */}
      <div style={{ height: "100vh" }} />
      <SideMenus scrollToSection={scrollToSection} />
      <Button>Hello Mike</Button>
    </div>
  );
}

export default HowItWorks;
