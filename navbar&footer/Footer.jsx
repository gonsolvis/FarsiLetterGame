import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <p className="footer-column-p">
            &copy; {new Date().getFullYear()} ScriptLit. All rights reserved.
          </p>
        </div>
        <div className="footer-column">
          <ul className="footer-links">
            <li>
              <a href="/">Home.</a>
            </li>
            <li>
              <a href="/about">About.</a>
            </li>
            <li>
              <a href="/services">Want to help us?</a>
            </li>
            <li>
              <a href="/contact">Contact us.</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
