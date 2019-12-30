import React, { createContext, useState, useEffect } from "react";
import dbServices from "../../dbServices";
import firebase from "../Config/fbConfig";

export const SitesContext = createContext();

const SitesContextProvider = props => {
  const [sites, updateSites] = useState([]);

  const getSites = async () => {
    const db = firebase.firestore();
    const sitesArr = []
    const newSites = await db
      .collection("sites")
      .where("isApproved", "==", true)
      .get();
      newSites.forEach(doc =>{
        const siteData = [doc.data(),doc.id]
        sitesArr.push(siteData)
      })
      updateSites(sitesArr)
  };

  useEffect(() => {
    getSites();
  }, []);

  return (
    <SitesContext.Provider value={{ sites }}>
      {props.children}
    </SitesContext.Provider>
  );
};

export default SitesContextProvider;
