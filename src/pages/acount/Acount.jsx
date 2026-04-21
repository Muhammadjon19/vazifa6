import React from "react";
import "./Acount.css";
function Acount() {
  return (
    <>
      <div className="vini">
        <h1>Edit Your Profile</h1>
        <div className="container">
          <div className="inp">
            <div className="input">
              <h4>First Name</h4>
              <input placeholder="Md" type="text" />
            </div>
            <div className="input">
              <h4>First Name</h4>
              <input placeholder="Md" type="text" />
            </div>
          </div>
          <div className="inp">
            <div className="input">
              <h4>First Name</h4>
              <input placeholder="Md" type="text" />
            </div>
            <div className="input">
              <h4>First Name</h4>
              <input placeholder="Md" type="text" />
            </div>
          </div>
        </div>
        <div className="aa">
          <h3>Password Changes</h3>
          <input placeholder="Current Passwod" type="text" />
          <br />
          <br />
          <input placeholder="Current Passwod" type="text" />
          <br />
          <br />
          <input placeholder="Current Passwod" type="text" />
        </div>
        <div className="btn">
          <button>Cancel</button>
          <button>Save Changes</button>
        </div>
      </div>
    </>
  );
}

export default Acount;
