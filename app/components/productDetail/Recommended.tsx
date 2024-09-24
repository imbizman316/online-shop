import React from "react";
import ProductsA from "../shop/ProductsA";
import { useNavigation } from "@/lib/NavigationContext";
import ProductItem from "../shop/ProductItem";
import { useParams } from "next/navigation";

function Recommended({ keyword }) {
  const { fetchedProductsData } = useNavigation();

  const { id } = useParams();

  const filteredProducts = fetchedProductsData.filter((product) => {
    return keyword.some(
      (key) =>
        product?.tags?.includes(key) && parseInt(product?.id) !== parseInt(id)
    );
  });

  const NoTagMatch = () => {
    return (
      <div className="p-5 text-red-700 font-semibold">NO PRODUCT MATCHES</div>
    );
  };

  return (
    <div className="py-10 w-full">
      <p className="text-2xl font-bold">ALSO RECOMMENDED</p>
      {filteredProducts?.length === 0 ? (
        <NoTagMatch />
      ) : (
        <div className="flex flex-wrap gap-6 items-center">
          {filteredProducts?.map((product) => (
            <ProductItem key={product.id} data={product} main={false} />
          ))}
        </div>
      )}
    </div>
  );
}

// <ProductItem key={item.id} data={item} main={main} />

export default Recommended;
