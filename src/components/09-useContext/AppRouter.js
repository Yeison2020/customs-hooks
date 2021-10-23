import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//-----I need to impor the componets, I'm Using here

import AboutScreen from "./AboutScreen";
import LogInScreen from "./LogInScreen";
import HomeScree from "./HomeScreen";
import NavBar from "./NavBar";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact={true} path="/" component={HomeScree} />
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/logIn" component={LogInScreen} />
            {/* <Route component={HomeScree}></Route> */}
            {/* Here the meaning of Redirect is the User did not write the right
          path. */}
            <Redirect to="./"></Redirect>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
