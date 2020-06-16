import React, { useContext } from "react";
import "./App.css";
import {
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
import Submit from './components/Submit'


function App() {
  const { token, logout } = useContext(UserContext);
  return (
    <div>
      {token ? (<Navbar logout={logout} />) : null}
      {/* {!token ? (<GuestNavbar logout={logout} />) : null} */}
      <Switch>

        <Route
          exact path="/" 
          component={Auth} 
          render={() => (token ? <Redirect to="/profile" /> : <Auth />)}
        />
        <Route 
          path='/politicalissues'
          component={PoliticalIssues}
        />
        <ProtectedRoute 
          path='/profile'
          component={Profile}
          redirectTo="/"
          token={token}
        />
        <ProtectedRoute 
          path='/submit'
          component={Submit}
          redirectTo="/"
          token={token}
        />
        <ProtectedRoute 
          path='/public'
          component={Public}
          redirectTo="/"
          token={token}
        />
        {/* I will leave the political issues protected, since a user would want to interface with the voting system directly */}
        <ProtectedRoute 
          path='/politicalissues'
          component={PoliticalIssues}
          redirectTo="/"
          token={token}
        />
        
      </Switch>
    </div>
  );
}

export default App;

// profile = show your own issues and your stats and add more issues
// public =
// 