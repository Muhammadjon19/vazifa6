import React from "react";
import "./Savat.css";
import Chekout from "../chekout/Chekout";
import Card6 from "../../components/card6/Card6";
function Savat() {
  return (
    <>
      <div className="savat">
        <div className="container">
          <div className="ol">
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Subtotal</h3>
          </div>
          <div className="card">
            <div className="fede">
              <img src="./imgs/q.png" alt="" />
              <h3>LCD Monitor</h3>
            </div>
            <h4>$650</h4>
            <h5>01 </h5>
            <h4>$650</h4>
          </div>
          <div className="card">
            <div className="fede">
              <img src="./imgs/q.png" alt="" />
              <h3>LCD Monitor</h3>
            </div>
            <h4>$650</h4>
            <h5>01 </h5>
            <h4>$650</h4>
          </div>
          <div className="btn">
            <button>Return To Shop</button>
            <button>Update Cart</button>
          </div>
          <div className="btnss">
            <div className="btns">
              <input placeholder="Coupon Code" type="text" />
              <button>Apply Coupon</button>
            </div>
            <div className="btne">
              <h3>Cart Total</h3>
              <div className="d">
                <h5>Subtotal:</h5>
                <h5>$1750</h5>
              </div>
              <br />
              <hr />
              <br />
              <div className="d">
                <h5>Subtotal:</h5>
                <h5>$1750</h5>
              </div>
              <br />
              <hr />
              <br />
              <div className="d">
                <h5>Subtotal:</h5>
                <h5>$1750</h5>
              </div>
              <Card6/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Savat;
