import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { CDN_URL } from "../utils/constants";
import data from "../utils/mockData";

const ResturantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, id } = resData?.info;
  return (
    <>
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img
          alt="res-logo"
          src={CDN_URL + resData.info.cloudinaryImageId}
          className="rounded-lg"
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{resData.info.sla.deliveryTime} mins</h4>
      </div>
    </>
  );
};

export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <>
        <div className="promoted">
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
            promoted
          </label>
          <ResturantCard {...props} />
        </div>
      </>
    );
  };
};

export default ResturantCard;
