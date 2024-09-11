"use client";

import React from "react";
import SubscribeSection from "./footer/SubscribeSection";

function Footer() {
  return (
    <div className="bg-[#1a2456] min-h-[400px] text-[#efc2b3] text-xs py-10 px-20 flex gap-10 justify-evenly flex-wrap">
      <div>
        <h1 className="pb-4">MONOGRAM</h1>
        <p>305 King St. W.</p>
        <p>Suite 502</p>
        <p>Kitchener, ON</p>
        <p>Canada</p>
      </div>
      <div>
        <h1 className="pb-4">QUICK LINKS</h1>
        <p>Home</p>
        <p>How It Works</p>
        <p>Shop</p>
        <p>Download</p>
      </div>
      <div>
        <h1 className="pb-4">QUICK LINKS</h1>
        <p>Home</p>
        <p>How It Works</p>
        <p>Shop</p>
        <p>Download</p>
      </div>
      <div>
        <h1 className="pb-4">QUICK LINKS</h1>
        <p>Home</p>
        <p>How It Works</p>
        <p>Shop</p>
        <p>Download</p>
      </div>
      <SubscribeSection />
    </div>
  );
}

export default Footer;
