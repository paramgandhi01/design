import React from "react";
import "./Pics.css";

export default function Pics() {
  return (
    <div className="back">
      <div className="title">
        <p>Quam ut mi sed suscipit pede</p>
        <h2>Quis Turpis Vivamus Pharetra Ornare</h2>
      </div>
      <div className="flex">
        <div className="pic1">
          <div className="n">
            <div className="hover"></div>
          </div>
          <div className="write">
              <h3>RAFA</h3>
              <p>he is GOAT</p>
          </div>
        </div>
        <div className="pic2">
          <div className="a">
            <div className="hover"></div>
          </div>
          <div className="write">
          <h3>NADAL</h3>
          <p>he is GOAT</p>
          </div>
        </div>
        <div className="pic3">
          <div className="d">
            <div className="hover"></div>
          </div>
          <div className="write">
              <h3>TONI</h3>
              <p>he is GOAT</p>
          </div>
        </div>
        <div className="pic4">
          <div className="al">
            <div className="hover"></div>
          </div>
          <div className="write">
          <h3>NADAL</h3>
          <p>he is GOAT</p>
          </div>
        </div>
      </div>
    </div>
  );
}
