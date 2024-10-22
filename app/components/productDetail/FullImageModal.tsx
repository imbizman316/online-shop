import React, { useEffect, useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

function FullImageModal({ setShowFullImage, index, images }) {
  const [moveDistance, setMoveDistance] = useState(index);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClick = (e) => {
    if (e.target.id === "hello") {
      setShowFullImage(false);
    }
  };

  const handleArrowClick = (direction) => {
    if (direction === "right") {
      moveDistance < images.length &&
        setMoveDistance((prev: number) => prev + 1);
    } else {
      moveDistance > 1 && setMoveDistance((prev: number) => prev - 1);
    }
  };

  const imageWidth = 700;

  return (
    <div
      id="hello"
      className="fixed inset-0 h-[100%] w-full bg-black top-0 z-[1000] flex justify-center items-center gap-10"
      style={{ backgroundColor: "rgba(0,0,0,0.85" }}
      onClick={handleClick}
    >
      <div
        className={`flex flex-row absolute justify-between px-3 bottom-16 z-[300000] h-0 top-[45%]`}
        style={{
          width: `${imageWidth}px`,
        }}
      >
        <FaRegArrowAltCircleLeft
          onClick={() => handleArrowClick("left")}
          className="cursor-pointer"
          color="white"
          size={40}
        />
        <FaRegArrowAltCircleRight
          onClick={() => handleArrowClick("right")}
          className="cursor-pointer"
          color="white"
          size={40}
        />
      </div>

      <div
        className={`bg-white w-[${imageWidth}px] flex overflow-hidden items-center`}
        style={{
          width: `${imageWidth}px`,
          height: `${imageWidth}px`,
        }}
      >
        <div
          className={`flex flex-row duration-200`}
          style={{
            transform: `translateX(${-imageWidth * (moveDistance - 1)}px)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-[#bdc1bc] z-[3000]"
              style={{
                backgroundImage: `url(${image.imageUrl})`,
                minWidth: `${imageWidth}px`,
                height: `${imageWidth}px`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FullImageModal;

{
  /* <div
  className="text-white z-[3000] bg-blue-950 opacity-100 w-[200px] h-[200px] border-2 border-white"
  onClick={() => {}}
>
  HELLOfaewfewafawefawefaewfawefawe
</div> */
}
