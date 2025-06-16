import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Search from "./components/Search";
import Resturant from "./components/ResturantCard";
import Body from "./components/Body";

const About = () => (
  <div>
    <h1>About</h1>
  </div>
);

export default function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Router>
          <Body path="/" />
          <About path="/about" />
        </Router>
      </div>
    </>
  );
}
