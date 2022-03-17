import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Auth from "./components/Auth.js";
import Profile from "./components/Profile.js";
import Public from "./components/Public.js";
import { UserContext } from "./context/UserProvider";
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  const { token, logout } = useContext(UserContext);
  return (
    <div className="app">
      {token && <Navbar logout={logout} token={token} />}
      <Switch>
        <Route
          exact
          path="/"
          render={() => (token ? <Redirect to="/profile" /> : <Auth />)}
        />
        <ProtectedRoute 
          path="/profile" 
          component={Profile}
          redirectTo="/"
          token={token}
        />
        <ProtectedRoute 
          path="/public" 
          component={Public}
          redirectTo="/"
          token={token}
        />
      </Switch>
    </div>
  );
}
