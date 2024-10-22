"use client";

import { useNavigation } from "@/lib/NavigationContext";
import BottomSticky from "./components/BottomSticky";
import MidImage from "./components/shop/MidImage";
import ProductsA from "./components/shop/ProductsA";
import TopImage from "./components/shop/TopImage";
import { useEffect, useRef } from "react";

export default function Home() {
  const productElement = useRef<HTMLDivElement>(null);

  const { handleBottomSticky, confirmCookies } = useNavigation();

  const scrollToSection = () => {
    productElement.current?.scrollIntoView({
      behavior: "smooth",
    });
    console.log("scroll");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleBottomSticky);

    return () => {
      window.removeEventListener("scroll", handleBottomSticky);
    };
  }, []);

  return (
    <div className="w-full">
      <TopImage scrollToSection={scrollToSection} />
      <ProductsA type="main" ref={productElement} />
      <MidImage />
      <ProductsA type="sub" />
      {!confirmCookies && <BottomSticky />}
    </div>
  );
}
