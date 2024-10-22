import React from "react";

// const ProductsA = React.forwardRef((props, ref) => {

const WhatIsCS = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="min-h-52 bg-[#efc2b3] w-full flex flex-col justify-center items-center gap-10 py-[200px] px-[100px]"
    >
      <div className="text-white text-3xl font-bold">
        WHAT IS A CREATIVE CONSOLE
      </div>
      <div className="text-xl font-light tracking-wider text-[#1a2456]">
        Creative Console is a modular, freeform control surface designed to
        streamline editing and make interacting with creative software more
        engaging. It is perfectly suited for photo editing and retouching, video
        editing, color grading, virtual production, audio/music production, and
        other creative workflows.
      </div>
    </div>
  );
});

export default WhatIsCS;
