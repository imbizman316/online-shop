"use client";

import Recommended from "@/app/components/productDetail/Recommended";
import ReviewContainer from "@/app/components/productDetail/ReviewContainer";
import { useNavigation } from "@/lib/NavigationContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function ProductDetailPage({ params }) {
  // Fetch the product by ID
  const { id } = params;

  const { shoppingCart, addToCart, fetchedProductsData } = useNavigation();

  const foundData = fetchedProductsData.find(
    (product) => parseInt(product.id) === parseInt(id)
  );

  const [itemCount, setItemCount] = useState(1);

  const handleCountChange = (e) => {
    setItemCount(e.target.value);
  };

  console.log(foundData);

  console.log(shoppingCart);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start pt-32 px-10">
      <div className="flex gap-6">
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
        <div>
          <h1 className="text-4xl font-bold uppercase">{foundData?.title}</h1>
          <div className="flex justify-between">
            <h1>{foundData.price}</h1>
            <div className="flex gap-3">
              <h1>{foundData.rating}</h1>
              <h1>{foundData.reviews.length}</h1>
            </div>
          </div>
          <div>
            <select
              name="itemCount"
              id="itemCount"
              value={itemCount}
              onChange={handleCountChange}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
            </select>
            <button
              className="bg-[#1a2456] text-white px-6 text-xs- py-2 rounded-3xl font-bold"
              onClick={() =>
                addToCart({ ...foundData, count: parseInt(itemCount) })
              }
            >
              ADD TO BAG
            </button>
          </div>
          <p className="py-5">{foundData.description}</p>
          <div className="flex justify-between">
            <h1 className="font-bold">PRODUCT DESCRIPTION</h1>
            <h1>+</h1>
          </div>
        </div>
      </div>
      <Recommended />
      <ReviewContainer reviews={foundData.reviews} />
      <Link href="/">Back to Shop</Link>
    </div>
  );
}

export default ProductDetailPage;
