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
import Login from "./components/Login";
import PoliticalIssuesPage from "./pages/PoliticalIssuesPage";

const PrivateRoute = ({ component: Component, authorized, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authorized === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

function App() {
  return (
    <Router>
      <h1>Header</h1> 
      <Switch>
        
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />
        <PrivateRoute
          exact
          path="/politicalissues"
          authorized={loggedIn}
          component={PoliticalIssuesPage}
        />
      </Switch>
    </Router>
  );
}

export default App;
