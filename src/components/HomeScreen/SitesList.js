import React, { useState } from "react";
import Site from "./Site";
import uuid from "uuid/v1";
import img1 from "../img/Rectangle3.png";
import img2 from "../img/Rectangle4.png";
import img3 from "../img/Rectangle5.png";
import img4 from "../img/Rectangle6.png";
import img5 from "../img/Rectangle7.png";

export default function SitesList() {
  // making some dummy data
  const [sites] = useState([
    {
      title: "This is my shitty website",
      details: "Id viverra felis vitae neque at enim, semper aliquet leo.",
      img: img5,
      id: uuid(),
      rank: 1
    },
    {
      title: "Not Bad but so fuckenv",
      details: "Id viverra felis vitae neque at enim, semper aliquet leo.",
      img: img2,
      id: uuid(),
      rank: 2
    },
    {
      title: "Arab Impact Factor",
      details: "Id viverra felis vitae neque at enim, semper aliquet leo.",
      img: img3,
      id: uuid(),
      rank: 3
    },
    {
      title: "Not Bad but so fucken",
      details: "Id viverra felis vitae neque at enim, semper aliquet leo.",
      img: img4,
      id: uuid(),
      rank: 4
    },
    {
      title: "Arab Impact Factor",
      details: "Id viverra felis vitae neque at enim, semper aliquet leo.",
      img: img5,
      id: uuid(),
      rank: 5
    },
    {
      title: "Not Bad but so fucken",
      details: "Id viverra felis vitae neque at enim, semper",
      img: img4,
      id: uuid(),
      rank: 6
    }
  ]);
  return (
    <div className="sites-list">
      {/* mapping throw sites and giving every site to site component */}
      {sites.map(site => {
        return <Site site={site} key={site.id} />;
      })}
    </div>
  );
}
