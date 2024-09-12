"use client";

import { useNavigation } from "@/lib/NavigationContext";
import React, { useState } from "react";

function CartItem({ item }) {
  const [itemCount, setItemCount] = useState(item.count);

  const { handleCartCountChange } = useNavigation();

  const handleChange = (e, id) => {
    setItemCount(e.target.value);
    handleCartCountChange(id, parseInt(e.target.value));
  };

  return (
    <div className="flex gap-3 py-3 w-full">
      <div
        className="bg-[#cbcedc]"
        style={{
          backgroundImage: `url(${item.thumbnail})`,
          minWidth: "100px",
          minHeight: "100px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      />
      <div className="text-[#1a2456] w-full">
        <p>{item.title}</p>
        <p>{item.price}</p>
        <select
          name="itemCount"
          id="itemCount"
          value={itemCount}
          onChange={(e) => handleChange(e, item.id)}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
        </select>
      </div>
      <div className="text-gray-400 cursor-pointer">X</div>
    </div>
  );
}

export default CartItem;
