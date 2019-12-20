import React from "react";
import WinnerSite from "./WinnerSite";
import "./HomeScreen.css"

export default function HomeScreen() {
  return (
    <div>
      <div className="herosection">
        <div className="left">
          <h3>UN AWWWARDS</h3>
          <h1>The worest place to find design inspiration.</h1>
          <p>Do you know a bad website?</p>
          <button className="submit">SUBMIT A WEBSITE</button>
        </div>
        <div className="right">
            <WinnerSite />
        </div>
      </div>
    </div>
  );
}
