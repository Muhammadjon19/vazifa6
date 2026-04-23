import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="cards">
            <div className="card">
              <div className="box">
                <img src="./imgs/k.svg" alt="" />
                <h3>Call To Us</h3>
              </div>
              <h4>We are available 24/7, 7 days a week.</h4>
              <h4>Phone: +8801611112222 </h4>
            </div>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <div className="card">
              <div className="box">
                <img src="./imgs/k.svg" alt="" />
                <h3>Call To Us</h3>
              </div>
              <h4>We are available 24/7, 7 days a week.</h4>
              <h4>Phone: +8801611112222 </h4>
            </div>
          </div>
          <div className="pedri">
            <div className="gavi">
              <input placeholder="Your Name *" type="text" />
              <input placeholder="Your Name *" type="text" />
              <input placeholder="Your Name *" type="text" />
            </div>
            <input placeholder="Your Massage" type="text" />
            <br />
            <br />
            <button>Send Massage</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
