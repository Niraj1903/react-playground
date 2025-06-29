import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-b-2 border-gray-200"
          key={item?.card?.info?.id}
        >
          <div className="py-2">
            <span className="">{item?.card?.info?.name}</span>
            <span>
              {" "}
              ₹ -
              {item?.card?.info?.defaultPrice / 100 ||
                item?.card?.info?.price / 100}
            </span>
            <p className="text-xs text-left">{item?.card?.info?.description}</p>
          </div>
          <div className="flex absolute">
            <img
              className="w-14"
              src={CDN_URL + item?.card?.info?.imageId}
              alt="ItemList-Logo"
            />
            <button
              onClick={() => handleAddItem(item)}
              className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
