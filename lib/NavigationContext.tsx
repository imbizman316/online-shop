"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

type NavigationContextType = {
  isOpen: boolean;
  toggleMenu: () => void;
  addToCart: (item: {}) => void;
  shoppingCart: any[];
  setShoppingCart: (cart: any[]) => void;
  fetchedProductsData: any[];
  handleCartCountChange: () => void;
  removeFromCart: () => void;
  subTotal: number;
  totalCount: number;
  currentCurrency: string;
  handleCurrencyChange: () => void;

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
  const [subTotal, setSubtotal] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [currentCurrency, setCurrentCurrency] = useState("KRW");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const addToCart = (item) => {
    let result = shoppingCart.find((each) => each.id === item.id);

    if (result) {
      let temp = shoppingCart;

      temp = temp.map((each) => {
        if (parseInt(each.id) === parseInt(item.id)) {
          alert(`${each.id} ${each.count}, ${item.count}`);
          return {
            ...each,
            count: parseInt(each.count) + parseInt(item.count),
          };
        } else {
          return { ...each };
        }
      });

      setShoppingCart(temp);
    } else {
      setShoppingCart((prev) => [...prev, item]);
    }
  };

  const fetchProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  };

  const handleCartCountChange = (id, newCount) => {
    let temp = shoppingCart;

    temp = temp.map((item) => {
      if (item.id === id) {
        return { ...item, count: newCount };
      } else {
        return { ...item };
      }
    });

    setShoppingCart(temp);
  };

  const removeFromCart = (id) => {
    let temp = shoppingCart;
    temp = temp.filter((item) => item.id !== id);

    setShoppingCart(temp);
  };

  const calculateSubtotal = () => {
    let tempCalculation = 0;
    let tempTotalCount = 0;

    shoppingCart.forEach((item) => {
      tempTotalCount = tempTotalCount + parseInt(item.count);
      tempCalculation =
        tempCalculation + parseFloat(item.price) * parseInt(item.count);
    });

    setSubtotal(tempCalculation);
    setTotalCount(tempTotalCount);
  };

  useEffect(() => {
    calculateSubtotal();
  }, [shoppingCart]);

  const {
    data: fetchedProductsData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: Infinity,
  });

  const handleCurrencyChange = (newCurrency) => {
    setCurrentCurrency(newCurrency);
  };

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
        removeFromCart,
        subTotal,
        totalCount,
        currentCurrency,
        handleCurrencyChange,
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
