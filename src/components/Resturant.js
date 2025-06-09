import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

export default function Resturant() {
  const [resturantCard, setResturantCard] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8467244&lng=77.6431526&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    // console.log(response);
    setResturantCard(
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return resturantCard === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="res-card">
        {resturantCard.map((item) => (
          <p>{item.info.name}</p>
        ))}
      </div>
    </>
  );
}
