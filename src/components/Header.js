import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useNetworkStatus from "../utils/useNetworkStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export default function Header() {
  const networkStatus = useNetworkStatus();
  const { UserName } = useContext(UserContext);

  const [btn, setBtn] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);

  function toggle() {
    setBtn((prev) => (prev === "Login" ? `Logout ${UserName}` : "Login"));
  }
  return (
    <>
      <div className="flex justify-between">
        <div className="logo-container">
          <img
            src="https://images.app.goo.gl/WUhgcwvffcubLNo36"
            alt="LOGO"
            className="w-56"
          />
        </div>

        <div>
          <ul className="flex m-10">
            <li>🛜{networkStatus ? "🟢" : "🔴"} </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/instamart">InstaMart</Link>
            </li>

            <li className="font-bold text-lg px-2">
              <Link to="/cart"> Cart({cartItems.length} items)</Link>
            </li>

            <button onClick={toggle}>{btn}</button>
          </ul>
        </div>
      </div>
    </>
  );
}
