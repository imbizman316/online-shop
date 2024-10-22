"use client";

import FullImageModal from "@/app/components/productDetail/FullImageModal";
import Recommended from "@/app/components/productDetail/Recommended";
import ReviewContainer from "@/app/components/productDetail/ReviewContainer";
import currencies from "@/data/currencies";
import { useNavigation } from "@/lib/NavigationContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

function ProductDetailPage({ params }) {
  // Fetch the product by ID
  const { id } = params;

  const {
    shoppingCart,
    addToCart,
    fetchedProductsData,
    isOpen,
    toggleMenu,
    currentCurrency,
    currentSymbol,
  } = useNavigation();

  const foundData = fetchedProductsData.find(
    (product) => parseInt(product.id) === parseInt(id)
  );

  const neededFoundData = [
    {
      id: "description",
      title: "PRODUCT DESCRIPTION",
      content: foundData?.description,
      hide: true,
    },
    {
      id: "return",
      title: "RETURN POLICY",
      content: foundData?.returnPolicy,
      hide: true,
    },
    {
      id: "shipping",
      title: "SHIPPING INFORMATION",
      content: foundData?.shippingInformation,
      hide: true,
    },
    {
      id: "warranty",
      title: "WARRANTY",
      content: foundData?.warrantyInformation,
      hide: true,
    },
  ];

  const [itemCount, setItemCount] = useState(1);
  const [moveImage, setMoveImage] = useState(0);
  const [finalData, setFinalData] = useState(neededFoundData);
  const [mainImage, setMainImage] = useState(1);
  const [showFullImage, setShowFullImage] = useState(false);

  const handleImageClick = (id) => {
    setShowFullImage(true);
  };

  const images = [
    {
      id: 1,
      imageUrl: foundData.images[0],
    },
    {
      id: 2,
      imageUrl:
        "https://preview.redd.it/240423-ishii-ran-gimpo-airport-v0-i45mwv1fo9wc1.jpg?width=640&crop=smart&auto=webp&s=87df4cad2f4dadde0c30a7c7ec7de53899eb6ce6",
    },
    {
      id: 3,
      imageUrl:
        "https://phinf.wevpstatic.net/MjAyMzA5MTZfMjc5/MDAxNjk0ODU3MjQ0Nzg3.gowR7Nj2OPv0AGyoB5uQPYq2VzZ9hDJXSzlNN3NSyOEg.o0eVTUq4HV-j8XnM1uhS5xC9BSuJuOfN1UEiC4K4O5Qg.PNG/8cf12da1-41d6-4c0f-9867-1b4f01a8483b.png?type=w670",
    },
    {
      id: 4,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Sana_Minatozaki_2022_%282%29_%28cropped%29.jpg/800px-Sana_Minatozaki_2022_%282%29_%28cropped%29.jpg",
    },
  ];

  const handleShowClick = (type: string) => {
    setFinalData((prev) =>
      prev.map((item) => {
        if (item.id === type) {
          return { ...item, hide: !item.hide };
        }
        return item;
      })
    );
  };

  const handleCountChange = (e) => {
    setItemCount(e.target.value);
  };

  const handleAddToBag = () => {
    addToCart({ ...foundData, count: parseInt(itemCount) });
    toggleMenu(true);
  };

  const smallImageWidth = 150;
  const imageGapWidth = 20;
  const maxSlideWidth =
    smallImageWidth * images.length + imageGapWidth * (images.length - 1);
  const moveSpeed = 250;

  const handleImageMove = (direction: string) => {
    console.log(moveImage);
    console.log(maxSlideWidth);

    if (direction === "right") {
      const remainingDistance = maxSlideWidth - moveImage;
      console.log("remaining", remainingDistance);

      if (remainingDistance > moveSpeed) {
        setMoveImage((prev) => prev + moveSpeed);
      } else {
        setMoveImage((prev) => prev + remainingDistance);
      }
    } else if (direction === "left" && moveImage > 0) {
      setMoveImage((prev) => (prev - moveSpeed > 0 ? prev - moveSpeed : 0));
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="min-h-screen max-w-[1100px] flex flex-col items-center pt-32 px-10">
        <div className="flex gap-6 flex-col sm:flex-col md:flex-row lg:flew-row xl:flew-row 2xl:flex-row items-center sm:items-center md:items-start lg:items-start xl:items-start">
          <div className="w-[400px] border border-black flex flex-col gap-5 cursor-zoom-in">
            <div
              onClick={() => handleImageClick(mainImage)}
              className="bg-[#bdc1bc] cursor-pointer"
              style={{
                backgroundImage: `url(${images[mainImage - 1].imageUrl})`,
                width: "full",
                height: "400px",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="flex flex-row gap-5 overflow-hidden relative">
              <div className="w-full flex flex-row absolute justify-between px-3 bottom-16 z-[300] h-0 top-[45%]">
                <FaRegArrowAltCircleLeft
                  onClick={() => handleImageMove("left")}
                  className="cursor-pointer"
                  size={35}
                />
                <FaRegArrowAltCircleRight
                  onClick={() => handleImageMove("right")}
                  className="cursor-pointer"
                  size={35}
                />
              </div>
              <div
                className={`flex flex-row relative duration-300`}
                style={{
                  right: `${moveImage}px`,
                  gap: `${imageGapWidth}px`,
                }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="bg-[#bdc1bc]"
                    style={{
                      backgroundImage: `url(${image.imageUrl})`,
                      minWidth: `${smallImageWidth}px`,
                      minHeight: `${smallImageWidth}px`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    onMouseEnter={() => setMainImage(image.id)}
                    onClick={() => handleImageClick(image.id)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col min-h-full justify-start gap-0">
            <h1 className="text-4xl font-bold uppercase">{foundData?.title}</h1>
            <div className="flex justify-between py-6">
              <h1 className="text-2xl font-semibold text-[#1a2456]">
                {currentSymbol} {foundData.price}
              </h1>
              <div className="flex justify-center items-center gap-3">
                <h1>{foundData.rating}</h1>
                <h1 className="font-semibold text-sm px-4 py-1 bg-pink-200 rounded-xl">
                  {foundData.reviews.length}
                </h1>
              </div>
            </div>
            <div className="w-full flex flex-row gap-10">
              <select
                className="border-2 border-black px-3 rounded-3xl"
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
                onClick={handleAddToBag}
              >
                ADD TO BAG
              </button>
            </div>
            {/* <p className="py-5">{foundData.description}</p> */}
            <div className="pt-10">
              {finalData?.map((item, index) => (
                <div
                  className=""
                  key={index}
                  onClick={() => handleShowClick(item.id)}
                >
                  <div
                    className={`flex justify-between items-center py-2 ${
                      index === 0 ? "border-t-2" : ""
                    } border-black`}
                  >
                    <h1 className="font-bold">{item.title}</h1>
                    <h1 className="text-4xl font-bold p-0 cursor-pointer">
                      {item.hide ? "+" : "-"}
                    </h1>
                  </div>
                  <div
                    className={`overflow-hidden duration-200 border-b-2 border-black ${
                      item.hide ? "" : "p-3"
                    }`}
                    style={{
                      maxHeight: item.hide ? 0 : 200,
                    }}
                  >
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Recommended keyword={foundData.tags} />
        <ReviewContainer reviews={foundData.reviews} />
        <Link className="p-10 w-full text-pink-500" href="/">
          {"<--"} Back to Shop
        </Link>
      </div>
      {showFullImage && (
        <FullImageModal
          setShowFullImage={setShowFullImage}
          images={images}
          index={mainImage}
        />
      )}
    </div>
  );
}

export default ProductDetailPage;
