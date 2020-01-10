import React, { createContext, useState, useEffect } from "react";
import firebase from "../Config/fbConfig";

export const SitesContext = createContext();

const SitesContextProvider = props => {
  const [sites, updateSites] = useState([]);
  const [winnerSite, updateWinnerSite] = useState([])

  const getSites = async () => {
    const db = firebase.firestore();
    let sitesArr = [];
    const newSites = await db
      .collection("sites")
      .where("isApproved", "==", true)
      .limit(9)
      .get();
    newSites.forEach(doc => {
      const siteData = [doc.data(), doc.id];
      sitesArr.push(siteData);
    });
    sitesArr.sort((a, b) => b[0].upVotes.length - a[0].upVotes.length);
    updateWinnerSite(sitesArr[0])
    sitesArr.splice(0,1)
    updateSites(sitesArr);
  };

  useEffect(() => {
    getSites();
  }, []);

  return (
    <SitesContext.Provider value={{ winnerSite, sites }}>
      {props.children}
    </SitesContext.Provider>
  );
};

export default SitesContextProvider;
