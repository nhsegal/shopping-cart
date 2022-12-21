import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar-container">
    <ul className="nav-bar">
      <Link to="/" aria-label="Home">
        <li>Home</li>
      </Link>
      <Link to="/shop" aria-label="Shop">
        <li>Shop</li>
      </Link>
    </ul>
    </div>
  );
};

export default NavBar;
