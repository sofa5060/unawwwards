import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [auth, setAuth] = useState({
    isShowed: false
  });

  const showForm = () => {
    setAuth({ ...auth, isShowed: true });
  };

  const hideForm = () => {
    setAuth({ ...auth, isShowed: false });
  };
  return (
    <AuthContext.Provider value={{ auth, showForm, hideForm }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
