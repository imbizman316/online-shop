"use client";

import React, { useState, forwardRef, ForwardedRef } from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import ProductItem from "./ProductItem";
import { useNavigation } from "@/lib/NavigationContext";

// const fetchProducts = async () => {
//   const response = await axios.get("https://dummyjson.com/products");
//   return response.data.products;
// };

const ProductsA = forwardRef<HTMLDivElement, { type?: string }>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    const { fetchedProductsData } = useNavigation();
    const [startIndex, setStartIndex] = useState(0);
    const [pageLength] = useState(5);

    const handlePageChange = () => {
      setStartIndex((prev) => prev + pageLength);
    };

    const handlePrevPage = () => {
      setStartIndex((prev) => prev - pageLength);
    };

    const slicedData = fetchedProductsData?.slice(
      startIndex,
      pageLength + startIndex
    );

    const { type } = props;
    const main = type === "main";

    return (
      <div className="min-h-[1000px] flex flex-col justify-between items-center">
        <div
          className="flex flex-wrap justify-center items-center px-20 gap-6 py-10"
          ref={ref}
        >
          {slicedData.map((item) => {
            return (
              item.rating >= 3 && (
                <ProductItem key={item.id} data={item} main={main} />
              )
            );
          })}
        </div>
        <div className="flex gap-5">
          <button onClick={handlePrevPage}>PREVIOUS PAGE</button>
          <button onClick={handlePageChange}>NEXT PAGE</button>
          {Array.from({ length: fetchedProductsData.length }, (_, i) => i)
            .slice(startIndex, pageLength)
            .map((each) => (
              <div key={each}>{each}</div>
            ))}
        </div>
      </div>
    );
  }
);

// Assign a display name for better debugging
ProductsA.displayName = "ProductsA";

export default ProductsA;
