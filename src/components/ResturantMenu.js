import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
  const [resturantMenuData, setResturantMenuData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8467244&lng=77.6431526&restaurantId=752872&catalog_qa=undefined&submitAction=ENTER"
    );
    const menuDataResponse = await menuData.json();
    console.log(menuDataResponse);
    setResturantMenuData(menuDataResponse.data);
  };
  return resturantMenuData === null ? (
    <Shimmer />
  ) : (
    <>
      <div className="resturantMenu-container">
        <div className="menu">
          <h1>Name of the Resturant</h1>
          <h2>Menu</h2>
          <ul>
            <li>Burgers</li>
            <li>Diet coke</li>
            <li>Biryani</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default ResturantMenu;
