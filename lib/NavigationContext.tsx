"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { createContext, useContext, useState } from "react";

type NavigationContextType = {
  isOpen: boolean;
  toggleMenu: () => void;
  shoppingCart: any[];
  setShoppingCart: (cart: any[]) => void;
  fetchedProductsData: any[];
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

  const fetchProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
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
        setShoppingCart,
        fetchedProductsData,
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
