"use client";

import currencies from "@/data/currencies";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// Define the structure of a product
type Product = {
  id: number;
  name: string;
  price: number;
  count: number;
};

// Define the context type with all relevant functions and state values
type NavigationContextType = {
  isOpen: boolean;
  toggleMenu: () => void;
  addToCart: (item: Product) => void;
  shoppingCart: Product[];
  setShoppingCart: (cart: Product[]) => void;
  fetchedProductsData: Product[];
  handleCartCountChange: (id: number, newCount: number) => void;
  removeFromCart: (id: number) => void;
  subTotal: number;
  totalCount: number;
  currentCurrency: string;
  handleCurrencyChange: (newCurrency: string) => void;
  toggleHamburgerSlide: () => void;
  openHamburgerSlide: boolean;
  showBottomSticky: boolean;
  handleBottomSticky: () => void;
  confirmCookies: boolean;
  handleConfirmCookies: () => void;
  currentSymbol: string;
};

// Create the context with an undefined default value
const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openHamburgerSlide, setOpenHamburgerSlide] = useState(false);
  const [shoppingCart, setShoppingCart] = useState<Product[]>([]);
  const [subTotal, setSubtotal] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [currentCurrency, setCurrentCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [showBottomSticky, setShowBottomSticky] = useState(false);
  const [confirmCookies, setConfirmCookies] = useState(false);
  const [currentSymbol, setCurrentSymbol] = useState("$");

  // Confirm cookie handling
  const handleConfirmCookies = () => setConfirmCookies(true);

  // Handle showing/hiding sticky component
  const handleBottomSticky = () => {
    if (window.scrollY > 200 && !showBottomSticky) {
      setShowBottomSticky(true);
    } else if (window.scrollY < 200) {
      setShowBottomSticky(false);
    }
  };

  // Toggle menu state
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Toggle hamburger slide state
  const toggleHamburgerSlide = () => setOpenHamburgerSlide((prev) => !prev);

  // Add product to the shopping cart
  const addToCart = (item: Product) => {
    const existingItem = shoppingCart.find((each) => each.id === item.id);

    if (existingItem) {
      const updatedCart = shoppingCart.map((each) =>
        each.id === item.id ? { ...each, count: each.count + item.count } : each
      );
      setShoppingCart(updatedCart);
    } else {
      setShoppingCart((prev) => [...prev, item]);
    }
  };

  // Remove product from the shopping cart
  const removeFromCart = (id: number) => {
    const updatedCart = shoppingCart.filter((item) => item.id !== id);
    setShoppingCart(updatedCart);
  };

  // Handle cart item count change
  const handleCartCountChange = (id: number, newCount: number) => {
    const updatedCart = shoppingCart.map((item) =>
      item.id === id ? { ...item, count: newCount } : item
    );
    setShoppingCart(updatedCart);
  };

  // Calculate the subtotal and total count
  const calculateSubtotal = () => {
    let tempSubtotal = 0;
    let tempTotalCount = 0;

    shoppingCart.forEach((item) => {
      tempTotalCount += item.count;
      tempSubtotal += item.price * item.count;
    });

    setSubtotal(tempSubtotal);
    setTotalCount(tempTotalCount);
  };

  // Fetch products data from API
  const fetchProducts = async (): Promise<Product[]> => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  };

  // Fetch currency exchange rates
  const fetchCurrencyExchange = async () => {
    const response = await axios.get(
      `https://api.exchangerate.host/live?access_key=${process.env.NEXT_PUBLIC_CURRENCY_API_KEY}`
    );
    return response.data;
  };

  const { data: fetchedProductsData = [] } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: Infinity,
  });

  const { data: currencyExchangeData } = useQuery({
    queryKey: ["exchangeData"],
    queryFn: fetchCurrencyExchange,
    staleTime: Infinity,
  });

  // Handle currency change logic
  useEffect(() => {
    const symbol = currencies.find(
      (currency) => currency.name === currentCurrency
    );

    setCurrentSymbol(symbol?.symbol || "$");

    if (currencyExchangeData?.quotes) {
      const { USDCAD, USDEUR, USDAUD, USDGBP, USDKRW, USDJPY } =
        currencyExchangeData.quotes;

      switch (currentCurrency) {
        case "USD":
          setExchangeRate(1);
          break;
        case "CAD":
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
  }, [currentCurrency, currencyExchangeData]);

  // Recalculate subtotal on shopping cart or exchange rate change
  useEffect(() => {
    calculateSubtotal();
  }, [shoppingCart, exchangeRate]);

  // Handle currency change
  const handleCurrencyChange = (newCurrency: string) => {
    setCurrentCurrency(newCurrency);
  };

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
        currentSymbol,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

// Hook for accessing the navigation context
export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
