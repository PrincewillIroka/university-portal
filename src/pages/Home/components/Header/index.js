import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import "./header.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = (value) => location?.pathname?.includes(value);

  function handleClick() {
    navigate("/login");
  }

  return (
    <header className="header">
      <img src="/images/logo.svg" className="logo" alt="Logo" />
      <ul className="nav-links-container">
        <li className={`nav-link ${getActiveTab("home") && "active-nav-link"}`}>
          <a href="/home">Home</a>
        </li>
        <li
          className={`nav-link ${getActiveTab("about") && "active-nav-link"}`}
        >
          <a href="/about">About</a>
        </li>
        <li
          className={`nav-link ${
            getActiveTab("programs") && "active-nav-link"
          }`}
        >
          <a href="/programs">Programs</a>
        </li>
        <li
          className={`nav-link ${getActiveTab("contact") && "active-nav-link"}`}
        >
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="nav-action-container">
        <BiSearch className="search-icon" />
        <button className="login-btn" onClick={handleClick}>
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
