"use client";

import Link from "next/link";
import React, { useState } from "react";

function ProductItem({ data, main }) {
  const [isEnter, setIsEnter] = useState(false);

  const handleEnter = () => {
    setIsEnter(true);
  };

  const handleLeave = () => {
    setIsEnter(false);
  };

  return (
    <Link
      href={`/shop/products/${data.id}`}
      className={`cursor-pointer flex flex-col max-w-[${
        main ? "450px" : "300px"
      }] h-[${main ? "400px" : "300px"}] justify-center items-center`}
    >
      <div
        className="duration-200 bg-gray-200"
        style={{
          backgroundImage: isEnter
            ? `url(https://media.tenor.com/5qnu80da5q4AAAAM/%EC%82%90%EB%81%BC%EC%82%90%EB%81%BC-%EC%9D%B4%EC%A3%BC%EC%9D%80.gif)`
            : `url(${data.thumbnail})`,
          width: main ? "350px" : "300px",
          maxWidth: "350px",
          height: "300px",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      />

      <div className="flex justify-between w-[100%] h-16">
        <div className="flex justify-between w-[100%]">
          <h1 className="text-lg font-bold text-left h-auto overflow-y-auto max-w-[70%]">
            {data.title}
          </h1>
          <h1>{data.price}</h1>
        </div>
      </div>
      {main && (
        <div className="text-sm h-10 overflow-hidden w-[250px]">
          {data.description}
        </div>
      )}
    </Link>
  );
}

export default ProductItem;
