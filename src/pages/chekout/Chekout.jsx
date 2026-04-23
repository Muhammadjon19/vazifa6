import React from "react";
import "./Chekout.css";
function Chekout() {
  return (
    <>
      <div className="chekout">
        <div className="container">
          <div className="havi">
            <h1>Billing Details</h1>
            <div className="card">
              <h5>First Name*</h5>
              <input type="text" />
            </div>
            <div className="card">
              <h5>First Name*</h5>
              <input type="text" />
            </div>
            <div className="card">
              <h5>First Name*</h5>
              <input type="text" />
            </div>
            <div className="card">
              <h5>First Name*</h5>
              <input type="text" />
            </div>
            <div className="card">
              <h5>First Name*</h5>
              <input type="text" />
            </div>
            <div className="card">
              <h5>First Name*</h5>
              <input type="text" />
            </div>
            <div className="card">
              <h5>First Name*</h5>
              <input type="text" />
            </div>
            <div className="pol">
              <img src="./imgs/d.svg" alt="" />
              <h4>Save this information for faster check-out next time</h4>
            </div>
          </div>
          <div className="ran">
            <div className="cards">
              <div className="img">
                <img src="./imgs/q.png" alt="" />
                <h4>LCD Monitor</h4>
              </div>
              <div className="ht">
                <h5>$650</h5>
              </div>
            </div>
            <div className="cards">
              <div className="img">
                <img src="./imgs/q.png" alt="" />
                <h4>LCD Monitor</h4>
              </div>
              <div className="ht">
                <h5>$650</h5>
              </div>
            </div>
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
            <div className="h5">
              <h5>Bank</h5>
              <h5>Cash on delivery</h5>
            </div>
            <div className="btns">
              <input placeholder="Coupon Code" type="text" />
              <button>Apply Coupon</button>
            </div>
            <button className="as">Place Order</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chekout;
