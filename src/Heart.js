/**
 * inspired by https://codepen.io/yumeeeei/pen/BQPmpX
 */
import React from "react";
import "./Heart.css";

const Heart = ({ text }) => {
  return (
    <div className="flex-container">
      <div className="unit">
        <div className="heart">
          <div className="heart-piece-0" />
          <div className="heart-piece-1" />
          <div className="heart-piece-2" />
          <div className="heart-piece-3" />
          <div className="heart-piece-4" />
          <div className="heart-piece-5" />
          <div className="heart-piece-6" />
          <div className="heart-piece-7" />
          <div className="heart-piece-8" />
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Heart;
