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
  toggleHamburgerSlide: () => void;
  openHamburgerSlide: boolean;
  showBottomSticky: boolean;
  handleBottomSticky: () => void;
  confirmCookies: boolean;
  handleConfirmCookies: () => void;

  // setFetchedProductsData: (product: any[]) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openHamburgerSlide, setOpenHamburgerSlide] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [subTotal, setSubtotal] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [currentCurrency, setCurrentCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [showBottomSticky, setShowBottomSticky] = useState(false);
  const [confirmCookies, setConfirmCookies] = useState(false);

  const handleConfirmCookies = () => {
    setConfirmCookies(true);
  };

  const handleBottomSticky = () => {
    if (window.scrollY > 200 && !showBottomSticky) {
      setShowBottomSticky(true);
    } else if (window.scrollY < 200) {
      setShowBottomSticky(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleHamburgerSlide = () => {
    setOpenHamburgerSlide(!openHamburgerSlide);
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

  const fetchCurrencyExchange = async () => {
    const response = await axios.get(
      `https://api.exchangerate.host/live?access_key=${process.env.NEXT_PUBLIC_CURRENCY_API_KEY}`
    );
    return response.data;
  };

  const {
    data: currencyExchangeData,
    error: exchangeError,
    isLoading: exchangeLoading,
  } = useQuery({
    queryKey: ["exchangeData"],
    queryFn: fetchCurrencyExchange,
    staleTime: Infinity,
    // cacheTime: 1000 * 60 * 60 * 24,
    // refetchOnWindowFocus: false,
  });

  console.log(currencyExchangeData);

  useEffect(() => {
    setSubtotal((prev) => prev / exchangeRate);

    if (currencyExchangeData?.quotes) {
      const { USDCAD, USDEUR, USDAUD, USDGBP, USDKRW, USDJPY } =
        currencyExchangeData?.quotes;

      switch (currentCurrency) {
        case "USD":
          setExchangeRate(1);
          break;
        case "CAS":
          setExchangeRate(USDCAD);
          break;
        case "EUR":
          setExchangeRate(USDEUR);
          break;
        case "AUD":
          setExchangeRate(USDAUD);
          break;
        case "GBP":
          setExchangeRate(USDGBP);
          break;
        case "KRW":
          setExchangeRate(USDKRW);
          break;
        case "JPY":
          setExchangeRate(USDJPY);
          break;
        default:
          setExchangeRate(1);
      }
    }
  }, [currentCurrency]);

  useEffect(() => {
    setSubtotal((prev) => prev * exchangeRate);
  }, [exchangeRate]);

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
    error: error,
    isLoading: isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: Infinity,
  });

  if (exchangeLoading) return <div>Fetching exchange rates...</div>;
  if (exchangeError) return <div>Error: {error.message}</div>;

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
        toggleHamburgerSlide,
        openHamburgerSlide,
        showBottomSticky,
        handleBottomSticky,
        confirmCookies,
        handleConfirmCookies,
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
