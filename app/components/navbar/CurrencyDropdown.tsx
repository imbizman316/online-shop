import React from "react";
import currencies from "@/data/currencies";
import { useNavigation } from "@/lib/NavigationContext";

function CurrencyDropdown() {
  const { currentCurrency, handleCurrencyChange } = useNavigation();

  return (
    <select
      className="bg-[#1a2456]"
      name="currencies"
      id="currencies"
      value={currentCurrency}
      onChange={(e) => handleCurrencyChange(e.target.value)}
    >
      {currencies.map((currency, index) => (
        <option
          key={index}
          className="bg-white text-black"
          value={currency.name}
        >
          {currency.name} {currency.symbol}
        </option>
      ))}
    </select>
  );
}

export default CurrencyDropdown;
