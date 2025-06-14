import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

export default function Header() {
  const [btn, SetBtn] = useState("Login");
  function toggle() {
    SetBtn((prev) => (prev === "Login" ? "Logout" : "Login"));
  }
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
            <button onClick={toggle}>{btn}</button>
          </ul>
        </div>
      </div>
    </>
  );
}
