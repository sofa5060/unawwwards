import React, { useContext } from "react";
import Site from "./Site";
import uuid from "uuid/v1";
// import img2 from "../img/Rectangle4.png";
// import img3 from "../img/Rectangle5.png";
// import img4 from "../img/Rectangle6.png";
// import img5 from "../img/Rectangle7.png";
import { SitesContext } from "../Contexts/SitesContext";

export default function SitesList() {
  // making some dummy data
  // const [sites] = useState([
  //   {
  //     title: "This is my shitty website",
  //     details: "Id viverra felis vitae neque at enim, semper aliquet leo.",
  //     img: img5,
  //     id: uuid(),
  //   },
  //   {
  //     title: "Not Bad but so fuckenv",
  //     details: "Id viverra felis vitae neque at enim, semper aliquet leo.",
  //     img: img2,
  //     id: uuid(),
  //   },
  //   {
  //     title: "Arab Impact Factor",
  //     details: "Id viverra felis vitae neque at enim, semper aliquet leo.",
  //     img: img3,
  //     id: uuid(),
  //   },
  //   {
  //     title: "Not Bad but so fucken",
  //     details: "Id viverra felis vitae neque at enim, semper aliquet leo.",
  //     img: img4,
  //     id: uuid(),
  //   },
  //   {
  //     title: "Arab Impact Factor",
  //     details: "Id viverra felis vitae neque at enim, semper aliquet leo.",
  //     img: img5,
  //     id: uuid(),
  //   },
  //   {
  //     title: "Not Bad but so fucken",
  //     details: "Id viverra felis vitae neque at enim, semper",
  //     img: img4,
  //     id: uuid(),
  //   }
  // ]);

  const { sites } = useContext(SitesContext);

  let rank = 1;
  return (
    <div className="sites-list">
      {/* mapping throw sites and giving every site to site component */}
      {sites.map(site => {
        rank++;
        return <Site site={site[0]} siteId={site[1]} key={site[1]} rank={rank} />;
      })}
    </div>
  );
}
