import React from "react";
import { filterLabels } from "../../constants/constants";

const FilterBar = () => {
  return (
    <div className="hidden sm:block flex-col bg-white border-2 border-gray-100 shadow-2xl px-8 w-52 p-4 mx-12">
      <div>
        {filterLabels.map((item, index) => (
          <div key={item.type + index}>
            <p className="font-medium py-2" key={item.type + index}>
              {item.type}
            </p>

            {item.value.map((val, index) => (
              <div className="flex gap-2" key={val + index}>
                <input type="checkbox" name={val} id={val} />
                {val}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
