import React from "react";
import ReactDOM from "react-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img
            src="https://images.app.goo.gl/WUhgcwvffcubLNo36"
            alt="LOGO"
            className="logo"
          />
        </div>

        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
}
