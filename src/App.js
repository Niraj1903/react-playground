import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import Resturant from "./components/ResturantCard";
import Body from "./components/Body";

export default function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Body />
      </div>
    </>
  );
}
