import React from "react";
import { Link } from "react-router-dom";
import "./Card6.css"
function Card6() {
  return (
    <>
      <Link className="btn_card6" to={"/chekout"}>Procees to checkout</Link>
    </>
  );
}

export default Card6;
