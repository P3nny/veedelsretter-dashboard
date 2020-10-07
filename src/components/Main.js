import React from "react";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import CompanyDashboard from "./CompanyDashboard";

const Main = (props) => {
  return (
    <div className="main-panel">
      <Navbar />
      <Switch>
        <Route path="/dashboard" component={AdminDashboard} />
        <Route path="/profile" component={CompanyDashboard} />
        <Redirect from="*" to="/dashboard" />
      </Switch>
    </div>
  );
};

export default Main;
