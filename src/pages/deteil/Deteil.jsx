import React, { useState } from "react";
import "./Deteil.css";
import Login1 from "../../components/login1/Login1";
import { registerFunction } from "../../services";
function Deteil() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="w">
            <img src="./imgs/login.png" alt="" />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              registerFunction(name, email, password);
            }}
            action=""
          >
            <div className="soz">
              <h1>Create an account</h1>
              <input
                onInput={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Name"
                type="text"
              />
              <br />
              <br />
              <input
                onInput={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email or Phone Number"
                type="text"
              />
              <br />
              <br />
              <input
                onInput={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
                type="text"
              />
              <br />
              <br />
              <button>Create Account</button>
              <br />
              <br />
              <div className="li">
                <h4>Already have account? </h4>
                <Login1 />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Deteil;
