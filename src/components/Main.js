import React from "react";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import CompanyDashboard from "./CompanyDashboard";
import useCompanyData from "./hooks/useCompanyData";

const Main = (props) => {
  const companyData = useCompanyData();

  return (
    <div className="main-panel">
      <Navbar />
      <Switch>
        <Route path="/dashboard">
          <AdminDashboard companyData={companyData} />
        </Route>
        <Route path="/profile">
          <CompanyDashboard companyData={companyData} />
        </Route>
        <Redirect from="*" to="/dashboard" />
      </Switch>
    </div>
  );
};

export default Main;
