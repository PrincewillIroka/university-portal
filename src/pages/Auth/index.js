import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import "./auth.css";

function Auth() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getActiveTab = (value) => activeTab.includes(value);

  const handleClick = () => {
    navigate("/", { replace: true });
  };

  const handleSetActiveTab = (route) => {
    setActiveTab(route);
    navigate(`/${route}`);
  };

  const handleSubmit = () => {};

  return (
    <div className="auth-container">
      <h3 className="auth-heading">University Portal</h3>
      <div className="auth-content">
        <div className="auth-header">
          <span
            className={`auth-header-text ${
              getActiveTab("login") && "auth-header-text-active"
            }`}
            onClick={() => handleSetActiveTab("login")}
          >
            Login
          </span>
          <span
            className={`auth-header-text ${
              getActiveTab("signup") && "auth-header-text-active"
            }`}
            onClick={() => handleSetActiveTab("signup")}
          >
            Sign Up
          </span>
        </div>
        <div className="auth-body">
          <div className="auth-body-wrapper">
            <input
              className="auth-input"
              placeholder="Enter username"
              value={password}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="auth-input"
              placeholder="Enter password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="submit-btn" onClick={handleSubmit}>
            {getActiveTab("login") ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>
      <AiFillHome className="home-icon" onClick={handleClick} />
    </div>
  );
}

export default Auth;
