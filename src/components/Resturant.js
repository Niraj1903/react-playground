import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { CDN_URL } from "../utils/constants";

export default function Resturant() {
  const [resturantCard, setResturantCard] = useState([]);
  console.log(resturantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8467244&lng=77.6431526&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    // console.log(response);

    setResturantCard(response.data);
  };

  return (
    <>
      {response.map((item) => (
        <div className="res-card">
          <h4>
            {
              resturantCard?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants?.info?.avgRating
            }
          </h4>
        </div>
      ))}
    </>
  );
}
