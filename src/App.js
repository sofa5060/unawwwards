import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import NavBar from "./components/layout/NavBar";
import AuthContextProvider from "./components/Contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
