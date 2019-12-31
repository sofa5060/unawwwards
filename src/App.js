import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import NavBar from "./components/layout/NavBar";
import AuthContextProvider from "./components/Contexts/AuthContext";
import SitesContextProvider from "./components/Contexts/SitesContext";
import SiteForm from "./components/CreateSite/SiteForm";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <NavBar />
        <Switch>
          <SitesContextProvider>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/submit" component={SiteForm} />
          </SitesContextProvider>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
