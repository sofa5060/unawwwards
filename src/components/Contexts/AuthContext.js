import React, { createContext, useState } from "react";
import firebase from "../Config/fbConfig";

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [form, editForm] = useState({ isShowed: false });
  const [currentUser, updateUser] = useState("");

  const showForm = () => {
    editForm({ isShowed: true });
  };

  const hideForm = () => {
    editForm({ isShowed: false });
  };

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      updateUser(user);
    } else {
      updateUser("");
    }
  });

  return (
    <AuthContext.Provider value={{ currentUser, showForm, hideForm, form }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
