import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";
import SideNav from "./SideNav"

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="left">
        <SideNav />
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
