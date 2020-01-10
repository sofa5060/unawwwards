import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./SiteForm.css";
import { Link } from "react-router-dom";
import dbServices from "../../dbServices"

export default function SiteForm() {
  const [siteTitle, setSiteTitle] = useState("");
  const [siteURL, setSiteURL] = useState("");
  const [siteDescription, setSiteDescription] = useState("");

  const handleSubmit = e =>{
    e.preventDefault()
    dbServices.addSite(siteTitle,siteURL,siteDescription)
    setSiteTitle("")
    setSiteURL("")
    setSiteDescription("")
  }
  
  return (
    <div className="site-form">
      <h1>Submit form</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <h3>Site name</h3>
          <TextField
            id="standard-basic"
            label="UnAwwwards"
            className="site-name"
            onChange={e => setSiteTitle(e.target.value)}
            value={siteTitle}
          />
        </div>
        <div className="row">
          <h3>URL</h3>
          <TextField
            required
            id="standard-required"
            label="www.badsite.com"
            className="url-form"
            onChange={e => setSiteURL(e.target.value)}
            value={siteURL}
          />
        </div>
        <div className="row">
          <h3>Description</h3>
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax="4"
            className="description"
            onChange={e => setSiteDescription(e.target.value)}
            value={siteDescription}
          />
        </div>
        <div className="btns">
          <Link to="/" className="button">
            Cancel
          </Link>
          <input type="submit" value="SUBMIT" className="submit" />
        </div>
      </form>
    </div>
  );
}
