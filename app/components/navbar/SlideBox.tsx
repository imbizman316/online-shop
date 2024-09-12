import { useNavigation } from "@/lib/NavigationContext";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

export const NothingInBag = () => {
  const { toggleMenu } = useNavigation();

  return (
    <div className="text-[#1a2456] h-52 flex flex-col justify-center items-center gap-5">
      <h1 className="text-xl font-light text-center">NOTHING IN YOUR BAG!</h1>
      <p className="text-center font-thin">
        <a
          className="text-red-600 hover:underline cursor-pointer"
          onClick={toggleMenu}
        >
          Start shopping{" "}
        </a>
        to see if you qualify for free shipping.
      </p>
    </div>
  );
};

export const CredCardPart = () => {
  return (
    <div className="text-[#1a2456]">
      <div className="flex gap-3">
        <div
          style={{
            backgroundImage:
              "url(https://monogramcc.com/static/2961c204c15cdb57d4b6510717020767/better_editing_guaranteed_blue_7b7e094cce.svg)",
            width: "350px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div>
          <h1>MONOGRAM BETTER EDITING GUARANTEE</h1>
          <p className="text-[11px] font-thin">
            Try Monogram Creative Console in your own workflow for 100 days. If
            it does not improve your editing experience, you can return it for a
            full refund.
          </p>
        </div>
      </div>
    </div>
  );
};

export const CheckOutButton = ({ shoppingCart }) => {
  return (
    <div className="bg-[#1a2456] absolute bottom-0 w-full p-5">
      <div className="flex justify-between">
        <h1>SUBTOTAL</h1>
        <h1>0</h1>
      </div>
      <div>
        <button
          className={`rounded-3xl ${
            shoppingCart.length <= 0 ? "bg-gray-400" : "bg-white"
          }  text-[#1a2456] w-full p-2 text-md mt-5`}
          disabled={shoppingCart.length <= 0}
        >
          CHECKOUT
        </button>
      </div>
      <p className="text-center mt-5 text-xs text-[#d78198]">
        GIFT CARD OR DISCOUNT CODE
      </p>
    </div>
  );
};

function SlideBox() {
  const { isOpen, toggleMenu } = useNavigation();

  const { shoppingCart } = useNavigation();

  return (
    <div>
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-slate-100 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="bg-[#1a2456] h-20 flex justify-start items-center">
          <MdKeyboardArrowLeft
            size={40}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
          <h1>CONTINUE SHOPPING</h1>
        </div>
        <div className="px-5">
          {shoppingCart.length <= 0 && <NothingInBag />}
          <CredCardPart />
        </div>
        <CheckOutButton shoppingCart={shoppingCart} />
      </div>
      {/* Partial Dark Overlay */}
      {isOpen && (
        <div
          className={`fixed top-0 right-64 h-full w-[calc(100%-16rem)] bg-black ${
            isOpen ? "bg-opacity-50" : "bg-opacity-0"
          } z-30 duration-500`}
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
}

export default SlideBox;
