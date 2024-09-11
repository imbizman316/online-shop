"use client";

import React, { useState } from "react";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

function SubscribeSection() {
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-[15em]">
      <h1 className="pb-4">SUBSCRIBE TO MONOGRAM</h1>
      <p>
        Master productivity with Creative Console and get all the latest
        Monogram news.
      </p>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          className="border-[#efc2b3] border focus:outline-none shadow-none bg-[#1a2456] p-1 w-51 mr-4"
          value={input}
          onChange={handleInputChange}
        />
        <button
          className={`bg-[#efc2b3] text-[#1a2456] px-5 rounded-xl font-bold`}
        >
          SUBMIT
        </button>
      </form>
      <div className="flex gap-2 py-3">
        <div className="bg-[#efc2b3] p-1 rounded-full">
          <FaInstagram size={19} className="text-black" />
        </div>
        <div className="bg-[#efc2b3] p-1 rounded-full">
          <FaTwitter size={19} className="text-black" />
        </div>
        <div className="bg-[#efc2b3] p-1 rounded-full">
          <FaFacebookF size={19} className="text-black" />
        </div>
        <div className="bg-[#efc2b3] p-1 rounded-full">
          <FaYoutube size={19} className="text-black" />
        </div>
      </div>

      <p>Monogram 2024</p>
    </div>
  );
}

export default SubscribeSection;
