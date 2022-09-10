import React from "react";
import { NavLink } from "react-router-dom";

const HeroIcon = () => {
  return (
    <div>
      <NavLink to="/" className="text-2xl text-white">
        TeeRex Store
      </NavLink>
    </div>
  );
};

export default HeroIcon;
