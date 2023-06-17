import React from "react";
import { BiSearch } from "react-icons/bi";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <img src="/images/logo.svg" className="logo" alt="Logo" />
      <ul className="nav-links-container">
        <li className="nav-link">
          <a href="/home">Home</a>
        </li>
        <li className="nav-link">
          <a href="/about">About</a>
        </li>
        <li className="nav-link">
          <a href="/programs">Programs</a>
        </li>
        <li className="nav-link">
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="nav-action-container">
        <BiSearch className="search-icon" />
        <button className="login-btn">Login</button>
      </div>
    </header>
  );
}

export default Header;