"use client";

import Footer from "./components/Footer";
import MidImage from "./components/shop/MidImage";
import ProductsA from "./components/shop/ProductsA";
import TopImage from "./components/shop/TopImage";
import { useRef } from "react";

export default function Home() {
  const productElement = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    productElement.current?.scrollIntoView({
      behavior: "smooth",
    });
    console.log("scroll");
  };

  return (
    <div className="w-full">
      <TopImage scrollToSection={scrollToSection} />
      <ProductsA type="main" ref={productElement} />
      <MidImage />
      <ProductsA type="sub" />
    </div>
  );
}
