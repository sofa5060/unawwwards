import React from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

export default function Site({ site, rank }) {
  // Just for fun
  const handleClick = e => {
    e.currentTarget.children[0].innerHTML++;
  };
  // showing site details
  return (
    <div className="site">
      <div className="img-back">
        <div className="hover">
            <a href={site.url} target="_blank" rel="noopener">visit</a>
        </div>
        <img src={site.img} alt="" />
      </div>
      <div className="bar">
        <h6>{rank}</h6>
        <hr />
        <div className="details">
          <h3>{site.title}</h3>
          <p>{site.discription}</p>
        </div>
        <div className="vote-button" onClick={handleClick}>
          <h5>{site.upVotes.length || 0}</h5>
          <ArrowDropUpIcon />
        </div>
      </div>
    </div>
  );
}
