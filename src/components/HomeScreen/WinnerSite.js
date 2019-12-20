import React from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import img from "../img/img.png";

export default function WinnerSite() {
  return (
    <div className="winner-site">
      <img src={img} alt="" />
      <div className="bar">
        <div className="left">
          <h3>Arab Impact Factor</h3>
          <p>Id viverra felis vitae neque at enim, semper aliquet leo.</p>
        </div>
        <div className="vote-button">
          <h5>UPVOTE</h5>
          <ArrowDropUpIcon />
        </div>
      </div>
    </div>
  );
}
