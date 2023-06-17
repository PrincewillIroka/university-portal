import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row-1">
        <img src="/images/logo.svg" className="logo" alt="Logo" />
        <div className="social-media-container">
          <img
            src="/images/social/instagram.svg"
            alt=""
            className="social-media-icon"
          />
          <img
            src="/images/social/facebook.svg"
            alt=""
            className="social-media-icon"
          />
          <img
            src="/images/social/twitter.svg"
            alt=""
            className="social-media-icon-3"
          />
        </div>
      </div>
      <div className="footer-row-2">
        <div className="footer-row-2-col"></div>
        <div className="footer-row-2-col"></div>
        <div className="footer-row-2-col"></div>
        <div className="footer-row-2-col"></div>
      </div>
      <span className="copyright-text">
        University Portal &copy; {new Date().getFullYear()}
      </span>
    </footer>
  );
}

export default Footer;
