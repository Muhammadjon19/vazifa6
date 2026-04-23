import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Card5() {
  return (
    <>
      <Link to={"savat"}>
        <FaShoppingCart />
      </Link>
    </>
  );
}

export default Card5;
