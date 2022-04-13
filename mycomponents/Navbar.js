import React from "react";
import "./Navbar.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg">
      <div className="mid">
        <div className="left1">
          <h3>YAMMOE</h3>
        </div>
        <div className="right1">
          <ul>
            <li>
              <Link to="/" className="decor">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="decor">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/phone" className="decor">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
