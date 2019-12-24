import React, { useState } from "react";
import uuid from "uuid/v1";
import img2 from "../img/Rectangle4.png";
import img3 from "../img/Rectangle5.png";
import img4 from "../img/Rectangle6.png";
import img5 from "../img/Rectangle7.png";
import PreviousSite from "./PreviousSite";

export default function PreviousSitesList() {
  // making some dummy data
  const [sites] = useState([
    {
      title: "This is my shitty website",
      details: "Id viverra felis vitae neque at enim, semper aliquet leo.",
      img: img5,
      id: uuid(),
      rank: 1,
      date: "5/12/2019"
    },
    {
      title: "Not Bad but so fuckenv",
      details: "Id viverra felis vitae neque at enim, semper aliquet leo.",
      img: img2,
      id: uuid(),
      rank: 2,
      date: "5/12/2019"
    },
    {
      title: "Arab Impact Factor",
      details: "Id viverra felis vitae neque at enim, semper aliquet leo.",
      img: img3,
      id: uuid(),
      rank: 3,
      date: "5/12/2019"
    },
    {
      title: "Not Bad but so fucken",
      details: "Id viverra felis vitae neque at enim, semper aliquet leo.",
      img: img4,
      id: uuid(),
      rank: 4,
      date: "5/12/2019"
    },
    {
      title: "Arab Impact Factor",
      details: "Id viverra felis vitae neque at enim, semper aliquet leo.",
      img: img5,
      id: uuid(),
      rank: 5,
      date: "5/12/2019"
    },
    {
      title: "Not Bad but so fucken",
      details: "Id viverra felis vitae neque at enim, semper",
      img: img4,
      id: uuid(),
      rank: 6,
      date: "5/12/2019"
    }
  ]);
  return (
    <div className="sites-list">
      {/* mapping throw sites and giving every site to site component */}
      {sites.map(site => {
        return <PreviousSite site={site} key={site.id} />;
      })}
    </div>
  );
}
