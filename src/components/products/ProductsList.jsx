import React from "react";
import { CartState } from "../../context/Context";
import ProductCard from "./productCard/ProductCard";

const ProductsList = () => {
  const {
    state: { products },
    productState: { searchQuery },
  } = CartState();

  const filterProducts = () => {
    let filteredItems = products;

    if (searchQuery) {
      filteredItems = filteredItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery)
      );
    }

    return filteredItems;
  };

  return (
    <div className="flex flex-1 flex-wrap gap-16 justify-center">
      {filterProducts().map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductsList;
