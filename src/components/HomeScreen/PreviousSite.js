import React from "react";

export default function PreviousSite({ site }) {
  return (
    <div className="site">
      <img src={site.img} alt="" />
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
