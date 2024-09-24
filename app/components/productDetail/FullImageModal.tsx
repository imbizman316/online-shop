import React, { useRef } from "react";

function FullImageModal({ setShowFullImage, index, images }) {
  const handleClick = (e) => {
    if (e.target.id === "hello") {
      setShowFullImage(false);
    }
  };

  return (
    <div
      id="hello"
      className="fixed inset-0 h-[100%] w-full bg-black top-0 z-[1000] flex justify-center items-center"
      style={{ backgroundColor: "rgba(0,0,0,0.85" }}
      onClick={handleClick}
    >
      <div
        key={index}
        className="bg-[#bdc1bc] z-[3000]"
        style={{
          backgroundImage: `url(${images[index - 1].imageUrl})`,
          minWidth: "550px",
          minHeight: "550px",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
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
