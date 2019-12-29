import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Layout.css";
import SideNav from "./SideNav";
import { AuthContext } from "../Contexts/AuthContext";

export default function NavBar() {
  const { showForm, currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="left">
        <SideNav />
        <h3 className="logo">
          <Link to="/">UnAwwwards.</Link>
        </h3>
      </div>
      <div className="right">
        {currentUser ? <h5>{currentUser.displayName}</h5> : <Link to="/" onClick={showForm}>
          Login / Register
        </Link>}
        <button className="submit">SUBMIT</button>
      </div>
    </div>
  );
}
