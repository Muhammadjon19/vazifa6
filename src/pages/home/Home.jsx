import React, { createContext, useContext } from "react";
import "./Home.css";
import Slider from "../../components/slider/Slider";
import { DataContext } from "../../App";
import { baseUrl } from "../../services";
function Home() {
  const { categoryData } = useContext(DataContext);
  const { productData } = useContext(DataContext);
  console.log(productData);

  return (
    <>
      <div className="hero">
        <div className="heroInfo">
          <div className="container">
            <div className="info">
              {categoryData?.map((item) => {
                return <h3>{item?.title}</h3>;
                <img src={item?.image} alt="" />;
              })}
            </div>
            <Slider />
          </div>
        </div>
      </div>

      <main>
        <div className="container">
          <div className="section1">
            <h2>Today’s</h2>
            <h1>Flash Sales</h1>
            <div className="cards">
              {productData?.slice(0, 4).map((item) => {
                return (
                  <div className="card">
                    <img src={`${baseUrl}${item?.pictures[0]}`} alt="" />
                    <h3>{item?.title.slice(0, 25)}</h3>
                    <h4>{item?.price}</h4>
                    ⭐⭐⭐⭐⭐ (88)
                  </div>
                );
              })}
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
              {categoryData?.map((item) => {
                return (
                  <div className="card">
                    <img src={item?.image} alt="" />
                    <h3>{item?.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div className="section1">
            <h2>Today’s</h2>
            <h1>Flash Sales</h1>
            <div className="cards">
              {productData?.slice(0, 4).map((item) => {
                return (
                  <div className="card">
                    <img src={`${baseUrl}${item?.pictures[0]}`} alt="" />
                    <h3>{item?.title.slice(0, 25)}</h3>
                    <h4>{item?.price}</h4>
                    ⭐⭐⭐⭐⭐ (88)
                  </div>
                );
              })}
            </div>
            <button>View All Products</button>
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
          <div className="section1">
            <h2>Today’s</h2>
            <h1>Flash Sales</h1>
            <div className="cards">
              {productData?.slice(0, 8).map((item) => {
                return (
                  <div className="card">
                    <img src={`${baseUrl}${item?.pictures[0]}`} alt="" />
                    <h3>{item?.title.slice(0, 25)}</h3>
                    <h4>{item?.price}</h4>
                    ⭐⭐⭐⭐⭐ (88)
                  </div>
                );
              })}
            </div>
            <button>View All Products</button>
          </div>

          <div className="section6">
            <h3>New Arrival</h3>
            <div className="cards">
              <div className="card">
                <img src="./imgs/123.png" alt="" />
              </div>
              <div className="imgss">
                <div className="img">
                  <img src="./imgs/124.png" alt="" />
                </div>
                <div className="imgs">
                  <img src="./imgs/125.png" alt="" />
                  <img src="./imgs/126.png" alt="" />
                </div>
              </div>
            </div>
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
