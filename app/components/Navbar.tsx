import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="w-[95%] h-14 flex flex-row items-center max-w-screen-xl bg-[#1a2456] shadow-lg py-[1em] px-[0.5em] text-[#efc2b3] text-[1rem] font-semibold fixed top-3 mx-3 left-0 right-0 justify-between z-[1000]">
      <div className="flex flex-row gap-2">
        <h1>icon</h1>
        <Link href="/">MONOGRAM</Link>
      </div>
      <div className="flex gap-10 text-[10px] font-thin">
        <Link href="/how-it-works">HOW IT WORKS</Link>
        <div>WORKFLOWS</div>
        <Link href="/download">DOWNLOAD</Link>
        <Link href="/blog">BLOG</Link>
        <Link href="/support">SUPPORT</Link>
        <div>SHOP</div>
        <div className="flex flex-row gap-3">
          <div>1</div>
          <div>USD</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
