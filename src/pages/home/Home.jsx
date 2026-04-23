import React from "react";
import "./Home.css";
import Card from "../../components/card/Card";
import Slider from "../../components/slider/Slider";
function Home() {
  return (
    <>
      <div className="hero">
        <div className="heroInfo">
          <div className="container">
            <div className="info">
              <h3>Woman’s Fashion</h3>
              <h3>Woman’s Fashion</h3>
              <h3>Woman’s Fashion</h3>
              <h3>Woman’s Fashion</h3>
              <h3>Woman’s Fashion</h3>
              <h3>Woman’s Fashion</h3>
              <h3>Woman’s Fashion</h3>
              <h3>Woman’s Fashion</h3>
              <h3>Woman’s Fashion</h3>
            </div>
            <Slider/>
          </div>
        </div>
      </div>

      <main>
        <div className="container">
          <div className="section1">
            <h2>Today’s</h2>
            <h1>Flash Sales</h1>
            <div className="cards">
              <div className="card">
                <img src="./imgs/b.png" alt="" />
                <h3>HAVIT HV-G92 Gamepad</h3>
                <h4>$120</h4>
                ⭐⭐⭐⭐⭐ (88)
              </div>
              <div className="card">
                <img src="./imgs/b.png" alt="" />
                <h3>HAVIT HV-G92 Gamepad</h3>
                <h4>$120</h4>
                ⭐⭐⭐⭐⭐ (88)
              </div>
              <div className="card">
                <img src="./imgs/b.png" alt="" />
                <h3>HAVIT HV-G92 Gamepad</h3>
                <h4>$120</h4>
                ⭐⭐⭐⭐⭐ (88)
              </div>
              <div className="card">
                <img src="./imgs/b.png" alt="" />
                <h3>HAVIT HV-G92 Gamepad</h3>
                <h4>$120</h4>
                ⭐⭐⭐⭐⭐ (88)
              </div>
            </div>
            <button>View All Products</button>
          </div>
          <br />
          <hr />
          <br />
          <div className="section2">
            <h2>Categories</h2>
            <h1>Browse By Category</h1>
            <div className="cards">
              <div className="card">
                <img src="./imgs/s.svg" alt="" />
                <h3>Phones</h3>
              </div>
              <div className="card">
                <img src="./imgs/s.svg" alt="" />
                <h3>Phones</h3>
              </div>
              <div className="card">
                <img src="./imgs/s.svg" alt="" />
                <h3>Phones</h3>
              </div>
              <div className="card">
                <img src="./imgs/s.svg" alt="" />
                <h3>Phones</h3>
              </div>
              <div className="card">
                <img src="./imgs/s.svg" alt="" />
                <h3>Phones</h3>
              </div>
              <div className="card">
                <img src="./imgs/s.svg" alt="" />
                <h3>Phones</h3>
              </div>
              <div className="card">
                <img src="./imgs/s.svg" alt="" />
                <h3>Phones</h3>
              </div>
              <div className="card">
                <img src="./imgs/s.svg" alt="" />
                <h3>Phones</h3>
              </div>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div className="section1">
            <h2>This Month</h2>
            <h1>Best Selling Products</h1>
            <div className="cards">
              <div className="card">
                <img src="./imgs/b.png" alt="" />
                <h3>HAVIT HV-G92 Gamepad</h3>
                <h4>$120</h4>
                ⭐⭐⭐⭐⭐ (88)
              </div>
              <div className="card">
                <img src="./imgs/b.png" alt="" />
                <h3>HAVIT HV-G92 Gamepad</h3>
                <h4>$120</h4>
                ⭐⭐⭐⭐⭐ (88)
              </div>
              <div className="card">
                <img src="./imgs/b.png" alt="" />
                <h3>HAVIT HV-G92 Gamepad</h3>
                <h4>$120</h4>
                ⭐⭐⭐⭐⭐ (88)
              </div>
              <div className="card">
                <img src="./imgs/b.png" alt="" />
                <h3>HAVIT HV-G92 Gamepad</h3>
                <h4>$120</h4>
                ⭐⭐⭐⭐⭐ (88)
              </div>
            </div>
          </div>
          <div className="section3">
            <div className="key">
              <h3>Categories</h3>
              <h1>Enhance Your Music Experience</h1>
              <div className="img">
                <img src="./imgs/e.png" alt="" />
                <img src="./imgs/e.png" alt="" />
                <img src="./imgs/e.png" alt="" />
                <img src="./imgs/e.png" alt="" />
              </div>
              <button>Buy Now!</button>
            </div>
            <div className="jr">
              <img src="./imgs/o.png" alt="" />
            </div>
          </div>
          <div className="section4">
            <h2>Our Products</h2>
            <h1>Explore Our Products</h1>
            <div className="cards">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <button>View All Products</button>
          </div>
          <div className="section5">
            <div className="cards">
              <div className="card">
                <img src="./imgs/11.svg" alt="" />
                <h3>FREE AND FAST DELIVERY</h3>
                <p>Free delivery for all orders over $140</p>
              </div>
              <div className="card">
                <img src="./imgs/11.svg" alt="" />
                <h3>FREE AND FAST DELIVERY</h3>
                <p>Free delivery for all orders over $140</p>
              </div>
              <div className="card">
                <img src="./imgs/11.svg" alt="" />
                <h3>FREE AND FAST DELIVERY</h3>
                <p>Free delivery for all orders over $140</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
