import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Links = () => {
  const links = [
    { id: 1, name: "Products", link: "/" },
    { id: 2, name: <AiOutlineShoppingCart />, link: "/cart" },
  ];

  return (
    <div>
      <ul className="flex sm:gap-8 gap-4 text-white items-center">
        {links.map((item) => (
          <li key={item.id}>
            <NavLink className="text-xl" to={item.link}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
