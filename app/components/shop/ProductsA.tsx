"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductItem from "./ProductItem";
import { useNavigation } from "@/lib/NavigationContext";

// const fetchProducts = async () => {
//   const response = await axios.get("https://dummyjson.com/products");
//   return response.data.products;
// };

const ProductsA = React.forwardRef((props, ref) => {
  const { fetchedProductsData } = useNavigation();

  const { type } = props;

  const main = type === "main";

  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: fetchProducts,
  // });

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <div
      className="flex flex-wrap justify-center items-center px-20 gap-6 py-10"
      ref={ref}
    >
      {fetchedProductsData?.map((item) => {
        return (
          item.rating >= 3 && (
            <ProductItem key={item.id} data={item} main={main} />
          )
        );
      })}
    </div>
  );
});

export default ProductsA;
