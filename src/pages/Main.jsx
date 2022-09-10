import React from "react";
import FilterBar from "../components/filterbar/FilterBar";
import ProductsList from "../components/products/ProductsList";
import SearchBar from "../components/search-bar/SearchBar";

const Main = () => {
  return (
    <div>
      <SearchBar />
      <div className="flex flex-1 gap-8 overflow-hidden h-screen">
        <FilterBar />
        <ProductsList />
      </div>
    </div>
  );
};

export default Main;
