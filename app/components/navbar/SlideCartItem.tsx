import { useNavigation } from "@/lib/NavigationContext";
import React from "react";
import CartItem from "./CartItem";

function SlideCartItem() {
  const { shoppingCart } = useNavigation();

  return (
    <div>
      {shoppingCart.map((item, index) => (
        <CartItem key={index} id={item.id} />
      ))}
    </div>
  );
}

export default SlideCartItem;
