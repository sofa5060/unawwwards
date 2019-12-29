import React from "react";

export default function PreviousSite({ site }) {
  return (
    <div className="site">
    <div className="img-back">
        <div className="hover">
            <a href={site.url} target="_blank" rel="noopener">visit</a>
        </div>
        <img src={site.img} alt="" />
      </div>
      <div className="bar">
        <div className="details">
          <h3>{site.title}</h3>
          <p>{site.details}</p>
        </div>
        <h4>{site.date}</h4>
      </div>
    </div>
  );
}
