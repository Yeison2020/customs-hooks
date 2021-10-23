import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutScreen from "./AboutScreen";
import LogInScreen from "./LogInScreen";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about" component={AboutScreen} />
          <Route path="/logIn" component={LogInScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
