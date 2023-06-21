import { useNavigate, useLocation } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { RiLoginCircleLine } from "react-icons/ri";
import "./header.css";
import { useWindowDimensions } from "../../../../hooks";
import { useStateValue } from "../../../../store";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pageWidth } = useWindowDimensions();
  const { state, dispatch } = useStateValue();
  const { isHeaderModalVisible = false } = state || {};
  const { pathname = "" } = location;

  const getActiveTab = (value) => {
    return pathname.includes(value);
  };

  const checkScreenSize = (width) => pageWidth > width;

  const handleClick = () => {
    navigate("/login");
  };

  const handleHeaderModalVisibility = (payload) => {
    dispatch({ type: "TOGGLE_HEADER_VISIBILITY", payload });
  };

  return (
    <header className="header">
      <GiHamburgerMenu
        className="hamburger-menu"
        onClick={() => handleHeaderModalVisibility(!isHeaderModalVisible)}
      />
      <img src="/images/logo.svg" className="logo" alt="Logo" />
      <ul
        className={`${
          checkScreenSize(1020)
            ? "nav-links-container"
            : !checkScreenSize(1020) && isHeaderModalVisible
            ? "nav-links-container-sm"
            : "nav-links-container-hidden"
        }`}
      >
        <li
          className={`nav-link ${
            (getActiveTab("home") || pathname === "/") && "active-nav-link"
          }`}
        >
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
        <IoMdClose
          className="hidden-icon close-icon"
          onClick={() => handleHeaderModalVisibility(!isHeaderModalVisible)}
        />
        <RiLoginCircleLine
          className="hidden-icon login-icon"
          onClick={handleClick}
        />
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
