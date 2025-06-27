import Shimmer from "./Shimmer";
import { RESTURANT_MENU_IMG_URL } from "../utils/constants";
import { useParams } from "react-router";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const ResturantMenu = () => {
  const { resId } = useParams();

  const user = useContext(UserContext);

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

  const { name, costForTwoMessage, avgRating, cuisines } =
    menuItem?.cards[2]?.card?.card?.info;

  return (
    <>
      <div className="resturantMenu-container text-center">
        <div className="text-center">
          <h1 className="font-bold my-6 text-2xl">{name}</h1>
          <p className="font-bold text-lg">
            {cuisines.join(", ")} - {costForTwoMessage}
          </p>
        </div>
        {categories.map((item, index) => (
          <ResturantCategory
            key={item.card.card.title}
            data={item.card.card}
            showItem={index === 0 ? true : false}
          />
        ))}
      </div>
    </>
  );
};

export default ResturantMenu;
