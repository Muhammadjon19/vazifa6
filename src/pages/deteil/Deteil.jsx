import React from "react";
import "./Deteil.css";
import Login1 from "../../components/login1/Login1";
function Deteil() {
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="w">
            <img src="./public/login.png" alt="" />
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
            <div className="li">
              <h4>Already have account? </h4>
              <Login1/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Deteil;
