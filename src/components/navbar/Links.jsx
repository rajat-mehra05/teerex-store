import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { CartState } from "../../context/Context";

const Links = () => {
  const {
    state: { cart },
  } = CartState();

  return (
    <div>
      <ul className="flex sm:gap-8 gap-4 text-xl text-white items-center">
        <li>
          <NavLink to="/"> Products </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <p className="flex text-sm justify-center items-center absolute top-[10px] right-[25px] w-8 h-8 bg-white text-black rounded-full">
              {cart.length || 0}
            </p>
            <AiOutlineShoppingCart />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Links;
