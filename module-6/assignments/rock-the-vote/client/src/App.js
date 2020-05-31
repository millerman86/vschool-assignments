import React, { useContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import authService from "./services/authService";
import Auth from "./components/Auth";
import { UserContext } from "./context/UserProvider";
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile'
import Public from './components/Public'
import PoliticalIssues from './components/PoliticalIssues'
import Navbar from './components/Navbar'

function App() {
  const { token, logout } = useContext(UserContext);
  return (
    <Router>
      {token ? (<Navbar logout={logout} />) : null}
      <Switch>

        <Route
          exact path="/" 
          component={Auth} 
          render={() => (token ? <Redirect to="/profile" /> : <Auth />)}
        />
        <ProtectedRoute 
          path='/profile'
          component={Profile}
          redirectTo="/"
          token={token}
        />
        <ProtectedRoute 
          path='/public'
          component={Public}
          redirectTo="/"
          token={token}
        />
        <ProtectedRoute 
          path='/politicalissues'
          component={PoliticalIssues}
          redirectTo="/"
          token={token}
        />
        
      </Switch>
    </Router>
  );
}

export default App;

// profile = show your own issues and your stats and add more issues
// public =
// 