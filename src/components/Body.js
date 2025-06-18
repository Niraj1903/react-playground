import data from "../utils/mockData";
import ResturantCard from "../components/ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RESTURANT_API } from "../utils/constants";
import { Link } from "react-router";

const Body = () => {
  function filter() {
    const filteredList = data.filter((item) => item.info.avgRating > 4);
    setListOfResturant(filteredList);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const dataResturant = await fetch(RESTURANT_API);
    const response = await dataResturant.json();
    setListOfResturant(
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const [listOfResturant, setListOfResturant] = useState([]);
  const [filterList, setFilterList] = useState("");

  function inputText(e) {
    setFilterList(e.target.value);
  }

  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              onChange={inputText}
              type="text"
              className="search-box"
              value={filterList}
            />
            <button
              onClick={() => {
                const filteredResturant = listOfResturant.filter((res) => {
                  res.info.name
                    .toLowerCase()
                    .includes(filterList.toLowerCase());
                  console.log(res);
                });
                console.log(filteredResturant);
                setListOfResturant(filteredResturant);
              }}
            >
              Search
            </button>
          </div>
          <button onClick={filter} className="filter-btn">
            Top Rated Resturant
          </button>
        </div>
        <div className="res-container">
          {listOfResturant.map((item) => (
            <Link key={item.info.id} to={"/resturants/" + item.info.id}>
              <ResturantCard resData={item} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
