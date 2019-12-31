import React,{useContext} from "react";
import WinnerSite from "./WinnerSite";
import "./HomeScreen.css";
import SitesList from "./SitesList";
import PreviousSitesList from "./PreviousSitesList";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import AuthForm from "../Auth/AuthForm"
import {AuthContext} from "../Contexts/AuthContext"
import {Link} from "react-router-dom"

export default function HomeScreen() {
  const { form } = useContext(AuthContext);
  return (
    <div>
      <div className="herosection" id="herosection">
        <div className="left">
          <h3>UN AWWWARDS</h3>
          <h1>The worest place to find design inspiration.</h1>
          <p>Do you know a bad website?</p>
          <Link to="/submit" className="submit">SUBMIT A WEBSITE</Link>
        </div>
        <div className="right">
          <WinnerSite />
        </div>
      </div>
      <hr />
      <div className="sites">
        <h2>
          Nominees <span>they needn’t your vote!</span>
        </h2>
        <SitesList />
      </div>
      {/* Previous winner sites */}
      <div className="sites">
        <h2>
          Previous <span>The worest websites ever!</span>
        </h2>
        <PreviousSitesList />
      </div>
      <div className="section3">
        <div className="content">
          <h1>Do you know a bad website?</h1>
          <p>Fell free to share website that hurts your eyes.</p>
          <Link to="/submit" className="submit">SUBMIT A WEBSITE</Link>
        </div>
        <hr className="line" />
        <div className="up">
          <a href="#Top">
            <ArrowUpwardIcon />
          </a>
        </div>
      </div>
      <footer>
        <h2>&copy; UnAwwwards. 2020</h2>
      </footer>
      {form.isShowed ? <AuthForm /> : null}
    </div>
  );
}
