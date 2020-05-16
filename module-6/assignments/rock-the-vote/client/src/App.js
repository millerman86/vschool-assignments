import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import authService from "./services/authService";
import Auth from "./components/Auth";
import PoliticalIssuesPage from "./pages/PoliticalIssuesPage";
import { UserContext } from "./context/UserProvider";


function App() {
  const { token, logout } = useContext(UserContext);
  return (
    <Router>
      {token ? (<h1>Header</h1>) : null}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </Router>
  );
}

export default App;
