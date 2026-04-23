import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Login from "./login/Login";
import { VscAccount } from "react-icons/vsc";
import Card1 from "./card1/Card1";
import Card2 from "./card2/Card2";
import Card5 from "./card5/Card5";
function Navbar() {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal && (
        <div className="modal">
          <div className="modalForm">
            <Card1 />
            <h4>My Order</h4>
            <h4>My Cancellations</h4>
            <h4>My Reviews</h4>
            <h4
              onClick={() => {
                setModal(false);
              }}
            >
              Logout
            </h4>
          </div>
        </div>
      )}
      <nav>
        <div className="container">
          <div className="logo">
            <img src="./imgs/Logo.png" alt="" />
          </div>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <li>
              <Login />
            </li>
          </ul>
          <div className="icon">
            <VscAccount
              onClick={() => {
                setModal(true);
              }}
            />
            <Card2 />
            <Card5/>
          </div>
        </div>
      </nav>
      <hr />
      <br />
    </>
  );
}

export default Navbar;
