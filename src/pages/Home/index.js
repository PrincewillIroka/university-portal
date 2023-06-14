import React from "react";
import { BiSearch } from "react-icons/bi";
import "./Home.css";
import Logo from "../../assets/Logo.svg";

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <img src={Logo} className="logo" alt="Logo" />
        <ul className="nav-container">
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
        <BiSearch className="search-icon" />
      </header>
      <section className="body">
        <div className="top-section">
          <div className="top-section-content">
            <div className="university-title">
              <span>University</span>
              <span>Portal</span>
            </div>
            <button className="btn-explore">Explore</button>
            <div className="stat-container">
              <div className="stat-item">
                <span className="stat-number">80+</span>
                <span className="stat-info">available programs</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3650+</span>
                <span className="stat-info">active students</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10/10</span>
                <span className="stat-info">postive ratings</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50000</span>
                <span className="stat-info">alumnus</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
