import React, { useContext  } from "react";
import Site from "./Site";
import { SitesContext } from "../Contexts/SitesContext";

export default function SitesList() {
  const { sites,fetching } = useContext(SitesContext);
  let rank = 1;
  return (
    <div className="sites-list">
      {/* mapping throw sites and giving every site to site component */}
      {sites.map(site => {
        rank++;
        return <Site site={site[0]} siteId={site[1]} key={site[1]} rank={rank} isFetching={fetching.isFetching}/>;
      })}
    </div>
  );
}
