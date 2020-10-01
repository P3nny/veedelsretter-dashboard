import React from "react";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import UserProfile from "./UserProfile";

const Main = (props) => {
  return (
    <div className="main-panel">
      <Navbar />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={UserProfile} />
        <Redirect from="*" to="/dashboard" />
      </Switch>
    </div>
  );
};

export default Main;
