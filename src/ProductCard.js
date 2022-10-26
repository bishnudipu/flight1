import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import moment from "moment/moment";


const ProductCard = (props) => {
  const { item } = props;
  const { mission_name, launch_date_local, flight_number, details, links } =
    item;

  return (
    <Link to={`launch/${flight_number}`}>
      <div className="wrapper">
        <div className="product-img">
          <img src={links.mission_patch} height="420" width="327" alt="" />
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1> {mission_name}</h1>
            <h2>{moment(launch_date_local).format("MMM Do YY")}</h2>
            <h2>Flight No:- {flight_number} </h2>
            <h2> {details} </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
