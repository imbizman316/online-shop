"use client";

import { useNavigation } from "@/lib/NavigationContext";
import React, { useState } from "react";

function CartItem({ id }) {
  // const [itemCount, setItemCount] = useState(item.count);

  const { shoppingCart, handleCartCountChange, removeFromCart } =
    useNavigation();

  const thisItem = shoppingCart.find((each) => each.id === id);

  // const handleChange = (e, id) => {
  //   setItemCount(e.target.value);
  //   handleCartCountChange(id, parseInt(e.target.value));
  // };

  return (
    <div className="flex gap-3 py-3 w-full">
      <div
        className="bg-[#cbcedc]"
        style={{
          backgroundImage: `url(${thisItem.thumbnail})`,
          minWidth: "100px",
          minHeight: "100px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      />
      <div className="text-[#1a2456] w-full">
        <p>{thisItem.title}</p>
        <p>{parseFloat(thisItem.price) * parseInt(thisItem.count)}</p>
        <select
          name="itemCount"
          id="itemCount"
          value={thisItem.count}
          onChange={(e) =>
            handleCartCountChange(thisItem.id, parseInt(e.target.value))
          }
        >
          {[...Array(Math.max(thisItem.count, 9)).keys()].map((each) => (
            <option key={each + 1} value={each + 1}>
              {each + 1}
            </option>
          ))}
          {/* <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option> */}
        </select>
      </div>
      <div
        className="text-gray-400 cursor-pointer"
        onClick={() => removeFromCart(thisItem.id)}
      >
        X
      </div>
    </div>
  );
}

export default CartItem;
