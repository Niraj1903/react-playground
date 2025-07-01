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
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50 sticky ">
        <div className="logo-container">
          <img
            src="https://images.app.goo.gl/WUhgcwvffcubLNo36"
            alt="LOGO"
            className="w-56"
          />
        </div>

        <div>
          <ul className="flex p-4 m-4">
            <li>🛜{networkStatus ? "🟢" : "🔴"} </li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About us</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4">
              <Link to="/instamart">InstaMart</Link>
            </li>

            <li className="px-4 font-bold text-lg">
              <Link to="/cart"> Cart({cartItems.length} items)</Link>
            </li>

            <button onClick={toggle}>{btn}</button>
          </ul>
        </div>
      </div>
    </>
  );
}
