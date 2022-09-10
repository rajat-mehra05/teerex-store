import React from "react";
import HeroIcon from "./HeroIcon";
import Links from "./Links";

const Navbar = () => {
  return (
    <div className="flex relative items-center justify-between shadow-sm px-4 sm:px-12 py-8 bg-[#0b0e0e]">
      <HeroIcon />
      <Links />
    </div>
  );
};

export default Navbar;
