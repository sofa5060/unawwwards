import React, { useContext } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import "./Auth.css";
import { AuthContext } from "../Contexts/AuthContext";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import dbServices from "../../dbServices"

export default function AuthForm() {
  const { hideForm } = useContext(AuthContext);

  // using firebaseui for showing oAuth buttons
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: user => {
        if(user.additionalUserInfo.isNewUser){
          dbServices.signUp(user)
        }
        hideForm()
      }
    }
  };

  return (
    <div className="back">
      <ClickAwayListener onClickAway={hideForm}>
        <div className="signup-form">
          <h2>You must login in first</h2>
          <h3>
            <span>We not welcome new users in</span> the worst place to find
            design inspiration
          </h3>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
          <h6>By clicking sign up you are agreeing to be good man</h6>
          <h5 onClick={hideForm}>{"{Close}"}</h5>
        </div>
      </ClickAwayListener>
    </div>
  );
}
