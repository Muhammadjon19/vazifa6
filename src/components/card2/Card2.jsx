import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Card2() {
  return (
    <>
      <Link to={"washlist"}>
        <FaHeart />
      </Link>
    </>
  );
}

export default Card2;
