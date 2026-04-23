import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <>
      <Link to={"bosilish"} className="card">
        <img src="./imgs/b.png" alt="" />
        <h3>HAVIT HV-G92 Gamepad</h3>
        <h4>$120</h4>
        ⭐⭐⭐⭐⭐ (88)
      </Link>
    </>
  );
}

export default Card;
