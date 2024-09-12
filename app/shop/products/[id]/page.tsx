"use client";

import { useNavigation } from "@/lib/NavigationContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function ProductDetailPage({ params }) {
  // Fetch the product by ID
  const { id } = params;

  const { fetchedProductsData } = useNavigation();

  const foundData = fetchedProductsData.find(
    (product) => parseInt(product.id) === parseInt(id)
  );

  console.log(foundData);

  return (
    <div className="h-screen w-full flex justify-center pt-32 px-10">
      <div>
        <h1 className="text-4xl font-bold uppercase">{foundData?.title}</h1>
        <div className="w-[400px] border border-black flex flex-col gap-5">
          <div
            className="bg-[#bdc1bc]"
            style={{
              backgroundImage: `url(${foundData.images[0]})`,
              width: "full",
              height: "400px",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="flex flex-row gap-5">
            <div
              className="bg-[#bdc1bc]"
              style={{
                backgroundImage: `url(${foundData.images[0]})`,
                width: "150px",
                height: "150px",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div
              className="bg-[#bdc1bc]"
              style={{
                backgroundImage: `url(${foundData.images[0]})`,
                width: "150px",
                height: "150px",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold uppercase">{foundData?.title}</h1>
        <div className="flex justify-between">
          <h1>{foundData.price}</h1>
          <h1>{foundData.rating}</h1>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
