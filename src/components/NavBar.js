import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="nav-bar">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/shop">
        <li>Shop</li>
      </Link>
    </ul>
  );
};

export default NavBar;
