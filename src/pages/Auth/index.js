import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import "./auth.css";

function Auth() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const getActiveTab = (value) => activeTab.includes(value);

  function handleClick() {
    navigate("/", { replace: true });
  }

  return (
    <div className="auth-container">
      <h3 className="auth-heading">University Portal</h3>
      <div className="auth-content">
        <div className="auth-header">
          <span
            className={`auth-header-text ${
              getActiveTab("login") && "auth-header-text-active"
            }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </span>
          <span
            className={`auth-header-text ${
              getActiveTab("signup") && "auth-header-text-active"
            }`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </span>
        </div>
        <div className="auth-body">
          {getActiveTab("login") ? (
            <div className="login-container">
              <input className="auth-input" placeholder="Enter username" />
            </div>
          ) : (
            <div className="signup-container">
              <input className="auth-input" placeholder="Enter username" />
              <input
                className="auth-input"
                placeholder="Enter password"
                type="password"
              />
            </div>
          )}
          <button className="submit-btn">
            {getActiveTab("login") ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>
      <AiFillHome className="home-icon" onClick={handleClick} />
    </div>
  );
}

export default Auth;
