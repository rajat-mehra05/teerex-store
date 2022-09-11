import React from "react";
import { CartState } from "../../context/Context";
import ProductCard from "./productCard/ProductCard";

const ProductsList = () => {
  const {
    state: { products },
    productState: {
      filterByColor,
      filterByGender,
      filterByPrice,
      filterByType,
      filterBySearchQuery,
    },
  } = CartState();

  const filterProducts = () => {
    let filteredItems = products;

    if (filterByColor.length) {
      filteredItems = filteredItems.filter((item) =>
        filterByColor.includes(item.color)
      );
    }

    if (filterByGender.length) {
      filteredItems = filteredItems.filter((item) =>
        filterByGender.includes(item.gender)
      );
    }

    if (filterByPrice.length) {
      filteredItems = filteredItems.filter((item) =>
        filterByPrice.some((range) => {
          // [0,250] = range example
          if (item.price >= range[0] && item.price <= range[1]) {
            return true;
          } else {
            return false;
          }
        })
      );
    }

    if (filterByType.length) {
      filteredItems = filteredItems.filter((item) =>
        filterByType.includes(item.type)
      );
    }

    if (filterBySearchQuery) {
      filteredItems = filteredItems.filter((item) =>
        item.name.toLowerCase().includes(filterBySearchQuery.toLowerCase())
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
