import Shimmer from "./Shimmer";
import { RESTURANT_MENU_IMG_URL } from "../utils/constants";
import { useParams } from "react-router";
import useResturantMenu from "../utils/useResturantMenu";

const ResturantMenu = () => {
  const { resId } = useParams();

  const menuItem = useResturantMenu(resId);

  if (menuItem === null) return <Shimmer />;

  const { itemCards } =
    menuItem?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const categories =
    menuItem?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  console.log(categories);

  const { name, costForTwoMessage, avgRating, cuisines } =
    menuItem?.cards[2]?.card?.card?.info;

  return (
    <>
      <div className="resturantMenu-container">
        <div className="menu">
          <h1>{name}</h1>
          <h3>{cuisines.join(", ")}</h3>
          <h3>{costForTwoMessage}</h3>
          <h3>{avgRating}</h3>
        </div>
      </div>
    </>
  );
};

export default ResturantMenu;
