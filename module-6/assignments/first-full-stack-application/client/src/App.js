import React, { useContext } from 'react';
import { UserContext } from "./context/UserProvider";
import './App.css';
import {
  Route, Switch, Redirect
} from 'react-router-dom'
import Auth from './components/Auth'

function App() {
  const {token, logout} = useContext(UserContext)

  return (
    <div>
      <Switch>
        <Route 
          exact path="/" 
          component={Auth} 
          render={() => (token ? <Redirect to="/profiledashboard" /> : <Auth />)}
        />
      </Switch>
    </div>
  );
}

export default App;