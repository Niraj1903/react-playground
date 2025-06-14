import data from "../utils/mockData";
import ResturantCard from "../components/ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  function filter() {
    const filteredList = data.filter((item) => item.info.avgRating > 4);
    setListOfResturant(filteredList);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const dataResturant = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8467244&lng=77.6431526&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await dataResturant.json();
    setListOfResturant(
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const [listOfResturant, setListOfResturant] = useState([]);

  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <button onClick={filter} className="filter-btn">
            Top Rated Resturant
          </button>
        </div>
        <div className="res-container">
          {listOfResturant.map((item, index) => (
            <ResturantCard key={index} resData={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
