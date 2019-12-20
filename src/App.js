import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomeScreen from './components/HomeScreen/HomeScreen';
import NavBar from './components/layout/NavBar';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
