import React from "react";

function SubscribeSection() {
  return (
    <div className="w-[15em]">
      <h1 className="pb-4">SUBSCRIBE TO MONOGRAM</h1>
      <p>
        Master productivity with Creative Console and get all the latest
        Monogram news.
      </p>
      <form className="flex" action="">
        <input
          type="text"
          className="border-none focus:outline-none shadow-none"
        />
        <button>SUBMIT</button>
      </form>
      <div></div>
      <p>Monogram 2024</p>
    </div>
  );
}

export default SubscribeSection;
