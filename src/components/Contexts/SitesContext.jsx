import React, { createContext, useState, useEffect } from "react";
import firebase from "../Config/fbConfig";

export const SitesContext = createContext();

const SitesContextProvider = props => {
  const [sites, updateSites] = useState([]);
  const [fetching, updateFetching] = useState({ isFetching: true });

  const getSites = async () => {
    const db = firebase.firestore();
    const sitesArr = [];
    const newSites = await db
      .collection("sites")
      .where("isApproved", "==", true)
      .get();
    newSites.forEach(doc => {
      const siteData = [doc.data(), doc.id];
      sitesArr.push(siteData);
    });
    updateSites(sitesArr);
  };

  useEffect(() => {
    getSites();
  }, []);

  useEffect(() => {
    if (sites.length > 0) {
      updateFetching({ isFetching: false });
    }
  }, [sites]);

  return (
    <SitesContext.Provider value={{ sites, fetching }}>
      {props.children}
    </SitesContext.Provider>
  );
};

export default SitesContextProvider;
