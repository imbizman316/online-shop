import React from "react";

function MidImage() {
  return (
    <div
      className="flex justify-center relative"
      style={{
        width: "100%",
        height: "500px",
        backgroundImage: "url(/images/speakers.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10 h-[190px]" />
      <div className="text-white text-center z-20 pt-10">
        <h1 className="text-3xl font-bold">CREATE YOUR OWN CONSOLE</h1>
        <p className="font-semibold pt-5">Add-on to make it perfect</p>
      </div>
    </div>
  );
}

export default MidImage;
