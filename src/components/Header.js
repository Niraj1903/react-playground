import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Link } from "react-router";
import useNetworkStatus from "../utils/useNetworkStatus";

export default function Header() {
  const networkStatus = useNetworkStatus();
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
            <li>NetworkStatus: {networkStatus ? "🟢" : "🔴"} </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>Cart</li>
            <button onClick={toggle}>{btn}</button>
          </ul>
        </div>
      </div>
    </>
  );
}
