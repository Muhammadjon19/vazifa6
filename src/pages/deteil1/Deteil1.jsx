import React from "react";
import "./Deteil1.css";
import Login1 from "../../components/login1/Login1";
function Deteil() {
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="w">
            <img src="./imgs/login.png" alt="" />
          </div>
          <div className="soz">
            <h1>Create an account</h1>
            <input placeholder="Name" type="text" />
            <br />
            <br />
            <input placeholder="Email or Phone Number" type="text" />
            <br />
            <br />
            <input placeholder="Password" type="text" />
            <br />
            <br />
            <button>Create Account</button>
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Deteil;
