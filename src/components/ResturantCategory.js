import { FaChevronDown } from "react-icons/fa";
import ItemList from "./ItemList";
import React, { useState } from "react";

const ResturantCategory = ({ data }) => {
  const [showItem, setShowItem] = useState(false);

  const hideShowMenu = () => {
    setShowItem((prev) => !prev);
  };
  return (
    <>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="cursor-pointer flex justify-between"
          onClick={hideShowMenu}
        >
          <span className="font-bold text-lg ">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            <FaChevronDown />
          </span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </>
  );
};

export default ResturantCategory;
