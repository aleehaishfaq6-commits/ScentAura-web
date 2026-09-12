
import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import cartContext from "../contextApi/cart/cartContext";

import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fword, setfword] = useState("");

  const navigate = useNavigate();

  const context = useContext(cartContext);
  const { cart } = context;

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const onchange = (e) => {
    setfword(e.target.value);
  };

  const handleSearch = () => {
    const searchValue = fword.trim();

    if (!searchValue) return;

    navigate(`/search/${searchValue}`);
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Total quantity for cart badge
  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="nav">

      {/* Logo */}
      <div className="logo">
        <h1>
          <span id="mart">Scent</span>Aura
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="list">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/shop">Shop</Link>
        </li>

        <li className="cart-nav">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>

          <span id="cartSpan">
            {cartCount}
          </span>
        </li>

      </ul>

      {/* Search */}
      <div className="searchmain">

        <input
          type="search"
          id="search"
          value={fword}
          placeholder="Search fragrance..."
          onChange={onchange}
          onKeyDown={handleKeyDown}
        />

        <button
          type="button"
          className="find"
          onClick={handleSearch}
          aria-label="Search"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>

      </div>

      {/* Mobile Toggle */}
      <button
        className="menu-toggle-btn"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu */}
      <ul className={`mobile-menu ${isOpen ? "active" : ""}`}>

        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>

        <li>
          <Link to="/shop" onClick={closeMenu}>
            Shop
          </Link>
        </li>

        <li>
          <Link to="/cart" onClick={closeMenu}>
            <i className="fa-solid fa-cart-shopping"></i>

            <sup id="cartSpan">
              {cartCount}
            </sup>
          </Link>
        </li>

      </ul>

    </div>
  );
};

export default Navbar;

