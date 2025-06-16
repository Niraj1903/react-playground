import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Search from "./components/Search";
import Resturant from "./components/ResturantCard";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router";

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

const appRouter = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Error /> },
  {
    path: "/about",
    element: <About />,
  },
  { path: "/contact", element: <Contact /> },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
