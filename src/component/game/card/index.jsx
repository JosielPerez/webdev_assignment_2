import React from "react";
import Styles from "./styles.css";

const Card = ({ imgSrc }) => {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="card-back">
          <img src={imgSrc} alt="" />
        </div>
      </div>
      <div className="card">
        <div className="card-back">
          <img src={imgSrc} alt="" />
        </div>
      </div>
      <div className="card">
        <div className="card-back">
          <img src={imgSrc} alt="" />
        </div>
      </div>
      <div className="card">
        <div className="card-back">
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Card;
