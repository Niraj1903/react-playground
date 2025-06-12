import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import Resturant from "./components/Resturant";

const ResturantCard = () => {
  return (
    <>
      <div className="res-card">
        <img alt="res-logo" className="res-logo" />
        <h3>KFC</h3>
        <h4>Burger,North Indian</h4>
        <h4>4.4 Stars</h4>
        <h4>38 mins</h4>
      </div>
    </>
  );
};

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="search"></div>
        <div className="res-container">
          <ResturantCard />
          <ResturantCard />
          <ResturantCard />
          <ResturantCard />
          <ResturantCard />
        </div>
      </div>
    </>
  );
};

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
