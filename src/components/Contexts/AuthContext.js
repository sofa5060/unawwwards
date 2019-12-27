import React, { createContext, useState,useEffect } from "react";
import firebase from "../Config/fbConfig";

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [auth, setAuth] = useState({
    user: {},
    isShowed: false
  });

  const showForm = () => {
    setAuth({ ...auth, isShowed: true });
  };

  const hideForm = () => {
    setAuth({ ...auth, isShowed: false });
  };
  // TODO : Amir fix this thing

  firebase.auth().onAuthStateChanged(user => {
    if(user){
      // updateUser()
      console.log(user)
    }else{
      console.log("logged out")
    }
  });

  // const updateUser = () => {
  //   setAuth({
  //     ...auth,
  //     user:firebase.auth().currentUser
  //   })
  // }

  // useEffect(()=>{
  //   console.log(auth)
  // })

  return (
    <AuthContext.Provider value={{ auth, showForm, hideForm }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
