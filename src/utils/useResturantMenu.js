import { useEffect, useState } from "react";
import { RESTURANT_MENU_API } from "../utils/constants";

const useResturantMenu = (resId) => {
  const [resturantMenuData, setResturantMenuData] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuData = await fetch(RESTURANT_MENU_API + resId);
    const menuDataResponse = await menuData.json();
    setResturantMenuData(menuDataResponse.data);
  };
  return resturantMenuData;
};

export default useResturantMenu;
