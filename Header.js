import React from "react";
import ReactDOM from "react-dom";

export default function Header() {
  return (
    <>
      <div className="logoContainer">
        <img src="./images/Logo.jpg" alt="LOGO" className="logo" />
      </div>

      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </>
  );
}
