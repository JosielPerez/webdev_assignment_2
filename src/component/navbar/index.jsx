import React from "react";
import Styles from "./styles.css";
const Navbar = () => {
  return (
    <div>
      {" "}
      <h1 className="title">Memory Game</h1>
      <div className="buttoncontainer">
        <div className="counter-container">
          <span className="matching-pairs-counter">Matching Pairs:</span>
        </div>
        <button className="newgame">New Game</button>
      </div>
    </div>
  );
};

export default Navbar;
