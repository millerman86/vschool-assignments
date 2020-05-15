import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import axios from 'axios'
import authService from './services/authService'




function App() {
  const [authorized, authorize] = useState(false)
  
  useEffect(() => {
    authService.authenticate()
      .then(() => authorize(true))
      .catch(() => console.log('rejected'))
  })

  return (
    <Router>
          {authorized ? (<h1>Header</h1>) : null}
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/search" component={Search} /> */}
        {/* <Route path="/stats" component={Stats} /> */}
      </Switch>
    </Router>
  );
}

export default App;
