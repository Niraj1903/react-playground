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
          <ul>
            {itemCards?.map((menuItem) => (
              <li key={menuItem?.card?.info?.id}>
                <img
                  src={RESTURANT_MENU_IMG_URL + menuItem?.card?.info?.imageId}
                  alt="MENU-LOGO"
                />
                <h4>{menuItem?.card?.info?.name}</h4>
                <h4>
                  ₹
                  {menuItem?.card?.info?.defaultPrice / 100 ||
                    menuItem?.card?.info?.price / 100}
                </h4>
                <h4>
                  {menuItem?.card?.info?.ratings?.aggregatedRating?.rating}(
                  {
                    menuItem?.card?.info?.ratings?.aggregatedRating
                      ?.ratingCountV2
                  }
                  )
                </h4>
                <h4>{menuItem?.card?.info?.itemAttribute?.vegClassifier}</h4>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ResturantMenu;
