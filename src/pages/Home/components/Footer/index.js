import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row-1">
        <div className="footer-row-1-col">
          <h4>Campus One</h4>
          <span>campus@university.com</span>
          <span>(41) 23456789</span>
          <address>123 New Drive Layout, Good Road, One Province</address>
        </div>
        <div className="footer-row-1-col">
          <h4>Campus Two</h4>
          <span>campus@university.com</span>
          <span>(41) 23456789</span>
          <address>123 New Drive Layout, Good Road, One Province</address>
        </div>
        <div className="footer-row-1-col">
          <h4>Campus Three</h4>
          <span>campus@university.com</span>
          <span>(41) 23456789</span>
          <address>123 New Drive Layout, Good Road, One Province</address>
        </div>
        <div className="footer-row-1-col">
          <h4>Campus Four</h4>
          <span>campus@university.com</span>
          <span>(41) 23456789</span>
          <address>123 New Drive Layout, Good Road, One Province</address>
        </div>
      </div>
      <div className="footer-row-2">
        <a href="/home">
          <img src="/images/logo.svg" className="footer-logo" alt="Logo" />
        </a>
        <div className="social-media-container">
          <a href="https://instagram.com">
            <img
              src="/images/social/instagram.svg"
              alt=""
              className="social-media-icon"
            />
          </a>
          <a href="https://facebook.com">
            <img
              src="/images/social/facebook.svg"
              alt=""
              className="social-media-icon"
            />
          </a>
          <a href="https://twitter.com">
            <img
              src="/images/social/twitter.svg"
              alt=""
              className="social-media-icon-3"
            />
          </a>
        </div>
      </div>
      <span className="copyright-text">
        University Portal &copy; {new Date().getFullYear()}
      </span>
    </footer>
  );
}

export default Footer;
