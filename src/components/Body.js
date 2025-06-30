import data from "../utils/mockData";
import ResturantCard, { withPromotedLabel } from "../components/ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RESTURANT_API } from "../utils/constants";
import { Link } from "react-router";
import useNetworkStatus from "../utils/useNetworkStatus";

const Body = () => {
  const ResturantCardPromoted = withPromotedLabel(ResturantCard);
  const networkStatus = useNetworkStatus();

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

  if (networkStatus === false)
    return <h1>You are offline !! Please check your internet connection</h1>;

  function inputText(e) {
    setFilterList(e.target.value);
  }

  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input
              onChange={inputText}
              type="text"
              className="border border-solid border-black"
              value={filterList}
            />
            <button
              className="px-4 py-2 bg-green-100 m-4 rounded-lg"
              onClick={() => {
                const filteredResturant = listOfResturant.filter((res) => {
                  res.info.name
                    .toLowerCase()
                    .includes(filterList.toLowerCase());
                  console.log(res);
                });
                setListOfResturant(filteredResturant);
              }}
            >
              Search
            </button>
          </div>
          <button onClick={filter} className="m-4 p-4 flex items-center">
            Top Rated Resturant
          </button>
        </div>
        <div className="flex flex-wrap">
          {listOfResturant.map((item) => (
            <Link key={item.info.id} to={"/resturants/" + item.info.id}>
              {item.info.avgRating > 4.5 ? (
                <ResturantCardPromoted resData={item} />
              ) : (
                <ResturantCard resData={item} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
