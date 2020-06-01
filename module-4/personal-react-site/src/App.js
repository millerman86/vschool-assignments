import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Stats from "./pages/Stats";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/search" component={Search} />
        <Route path="/stats" component={Stats} />
      </Switch>
    </Router>
  );
}

export default App;


