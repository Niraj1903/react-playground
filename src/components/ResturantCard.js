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
      <div className="res-card">
        <img
          alt="res-logo"
          src={CDN_URL + resData.info.cloudinaryImageId}
          className="res-logo"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{resData.info.sla.deliveryTime} mins</h4>
      </div>
    </>
  );
};

export const withPromotedLabel = (ResturantCard) => {
  return () => {
    return (
      <>
        <label>Promoted</label>
        <ResturantCard />
      </>
    );
  };
};

export default ResturantCard;
