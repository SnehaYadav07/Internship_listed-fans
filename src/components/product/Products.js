import React from "react";
import "./Product.css";
import Piechart from "../piechart/Piechart";
import arr from "../utils/vector4.svg";

const Products = () => {
  return (
    <div className="product">
      <div className="productHeading">
        <p className="top">Top Products</p>
        <p className="date">June-July 2023  <img className="dateImage" src={arr} alt="" height={"10px"} /></p>
      </div>
      <div className="piechart">
        <div className="chart">
          <Piechart />
        </div>
        <div className="legends">
          <div className="green2">
            <div className="greenDot"></div>
            <p className="basicTees">Basic Tees</p>
          </div>
          <p className="greenPercent">55%</p>
          <div className="yellow">
            <div className="yellowDot"></div>
            <p className="shorts">Custom Shorts</p>
          </div>
          <p className="yellowPercent">55%</p>
          <div className="red2">
            <div className="redDot"></div>
            <p className="hoodies">Super Hoodies</p>
          </div>
          <p className="redPercent">55%</p>
        </div>
      </div>
    </div>
  );
};

export default Products;