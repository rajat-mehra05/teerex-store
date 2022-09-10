import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="py-8 text-center">
      <div className="flex items-center gap-4 justify-center">
        <input
          className="border-b-[1px] border-gray-500 p-2 w-96"
          type="text"
          name="searchText"
          id="searchText"
          placeholder="Search for products..."
        />
        <button className="border-none bg-black p-2 text-xl text-white">
          <BiSearchAlt2 />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
