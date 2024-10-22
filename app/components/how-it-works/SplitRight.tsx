import React, { useEffect, useRef, useState } from "react";

function SplitRight() {
  const compRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (compRef.current) {
        const rect = compRef.current.getBoundingClientRect();
        const navbarHeight = 56; // Adjust based on your Navbar height

        if (
          rect.top <= navbarHeight &&
          window.scrollY < 3000 &&
          window.scrollY > 1800
        ) {
          setIsAtTop(true);
        } else {
          setIsAtTop(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-black justify-start flex items-center h-screen w-[50%] border-black border-2 ${
        isAtTop ? "fixed right-0 top-0" : "fixed right-0 top-[-400px]"
      }`}
      ref={compRef}
      style={{
        backgroundImage:
          "url(https://tse1.mm.bing.net/th?id=OIG1.zaJ4LaAGcGsOSibedipj&pid=ImgGn)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "200% 100%",
      }}
    ></div>
  );
}

export default SplitRight;
