import React from "react";
import { filterLabels } from "../../constants/constants";
import { CartState } from "../../context/Context";

const FilterBar = () => {
  const {
    productDispatch,
    productState: {
      filterByColor,
      filterByGender,
      filterByPrice,
      filterByType,
    },
  } = CartState();

  return (
    <div className="hidden sm:block flex-col bg-white border-2 border-gray-100 shadow-2xl px-8 w-52 p-4 mx-12">
      <div className="flex flex-col space-y-4">
        {/* by color */}
        <div className="color">
          <label htmlFor="color" id="color" className="font-semibold">
            Color
          </label>
          {filterLabels.color.map((colorChoice, index) => {
            return (
              <div key={index} className="flex gap-2">
                <input
                  type="checkbox"
                  key={index}
                  onChange={() =>
                    productDispatch({
                      type: "FILTER_BY_COLOR",
                      payload: colorChoice,
                    })
                  }
                  checked={filterByColor.includes(colorChoice) ? true : false}
                />
                {colorChoice}
              </div>
            );
          })}
        </div>
        {/* by gender */}
        <div className="gender">
          <label htmlFor="gender" id="gender" className="font-semibold">
            Gender
          </label>
          {filterLabels.gender.map((genderChoice, index) => {
            return (
              <div key={index} className="flex gap-2">
                <input
                  type="checkbox"
                  key={index}
                  onChange={() =>
                    productDispatch({
                      type: "FILTER_BY_GENDER",
                      payload: genderChoice,
                    })
                  }
                  checked={filterByGender.includes(genderChoice) ? true : false}
                />
                {genderChoice}
              </div>
            );
          })}
        </div>

        {/* by price */}
        <div className="price">
          <label htmlFor="price" id="price" className="font-semibold">
            Price
          </label>
          {filterLabels.price.map((priceChoice, index) => {
            return (
              <div key={index} className="flex gap-2">
                <input
                  type="checkbox"
                  key={index}
                  onChange={() =>
                    productDispatch({
                      type: "FILTER_BY_PRICE",
                      payload: priceChoice,
                    })
                  }
                  checked={filterByPrice.includes(priceChoice) ? true : false}
                />
                {priceChoice}
              </div>
            );
          })}
        </div>

        {/* by type */}
        <div className="type">
          <label htmlFor="type" id="type" className="font-semibold">
            Type
          </label>
          {filterLabels.type.map((typeChoice, index) => {
            return (
              <div key={index} className="flex gap-2">
                <input
                  type="checkbox"
                  key={index}
                  onChange={() =>
                    productDispatch({
                      type: "FILTER_BY_TYPE",
                      payload: typeChoice,
                    })
                  }
                  checked={filterByType.includes(typeChoice) ? true : false}
                />
                {typeChoice}
              </div>
            );
          })}
        </div>

        <button
          onClick={() =>
            productDispatch({
              type: "CLEAR_ALL_FILTERS",
            })
          }
          className="bg-black text-white p-2 rounded"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
