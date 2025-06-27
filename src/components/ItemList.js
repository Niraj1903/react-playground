import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
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
          </div>
          <div className="flex">
            <p className="text-xs text-left">{item?.card?.info?.description}</p>
            <img
              className="w-14"
              src={CDN_URL + item?.card?.info?.imageId}
              alt="ItemList-Logo"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
