import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/search" component={Search} /> */}
        {/* <Route path="/stats" component={Stats} /> */}
      </Switch>
    </Router>
  );
}

export default App;
