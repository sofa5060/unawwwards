import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" className="hamburger">
          <svg width="24" height="24">
            <path d="M0,10 30,10" stroke="#555555" strokeWidth="2" />
            <path d="M0,15 30,15" stroke="#555555" strokeWidth="2" />
            <path d="M0,20 30,20" stroke="#555555" strokeWidth="2" />
          </svg>
        </Link>
        <h3 className="logo">
          <Link to="/">UnAwwwards.</Link>
        </h3>
      </div>
      <div className="right">
        <Link to="/">Login / Register</Link>
        <button className="submit">SUBMIT</button>
      </div>
    </div>
  );
}
