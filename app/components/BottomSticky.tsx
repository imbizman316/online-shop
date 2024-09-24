import { useNavigation } from "@/lib/NavigationContext";
import React from "react";

function BottomSticky() {
  const { showBottomSticky, handleBottomSticky, handleConfirmCookies } =
    useNavigation();

  // transform ${
  //   openHamburgerSlide ? "translate-x-320" : "translate-x-full"
  // } transition-transform duration-300

  // ${
  //   showBottomSticky && "translate-y-[80px]"
  // }

  return (
    <div
      className={`fixed bottom-[0] bg-gray-300 py-3 w-full flex flex-col justify-center items-center gap-3 border-blue-800 border-y z-[300] transform transition-transform duration-300 ${
        showBottomSticky ? "translate-y-[0]" : "translate-y-[82px]"
      }`}
    >
      <div className="text-xs">
        Cookies help us deliver our services. By using this website you agree to
        our use of cookies.
      </div>
      <div className="flex justify-center gap-10 text-sm">
        <button>LEARN MORE</button>
        <button
          className="text-white bg-blue-800 py-1 px-4 rounded-2xl"
          onClick={handleConfirmCookies}
        >
          I UNDERSTAND
        </button>
      </div>
    </div>
  );
}

export default BottomSticky;
