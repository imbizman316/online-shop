"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { createContext, useContext, useState } from "react";

type NavigationContextType = {
  isOpen: boolean;
  toggleMenu: () => void;
  addToCart: (item: {}) => void;
  shoppingCart: any[];
  setShoppingCart: (cart: any[]) => void;
  fetchedProductsData: any[];
  handleCartCountChange: () => void;
  // setFetchedProductsData: (product: any[]) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const addToCart = (item) => {
    if (shoppingCart.includes(item)) {
    } else {
      setShoppingCart((prev) => [...prev, item]);
    }
  };

  const fetchProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  };

  const handleCartCountChange = (id, newCount) => {
    const temp = shoppingCart;

    temp.map((item) => {
      if (item.id === id) {
        return { ...item, count: newCount };
      } else {
        return { ...item };
      }
    });

    setShoppingCart(temp);
  };

  const {
    data: fetchedProductsData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: Infinity,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <NavigationContext.Provider
      value={{
        isOpen,
        toggleMenu,
        shoppingCart,
        addToCart,
        setShoppingCart,
        fetchedProductsData,
        handleCartCountChange,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
