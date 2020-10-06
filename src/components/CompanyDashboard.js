import React, { useState, useEffect } from "react";

import GetCompany from "./GetCompany";
// import CompanyProfile from "./CompanyProfile";

const CompanyDashboard = () => {
  const [appState, setAppState] = useState({
    loading: false,
    companies: null,
    selectedCompany: "Heiser OHG",
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://takehomedata.dokku.railslabs.com/companies.json`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((companies) => {
        setAppState({ loading: false, companies: companies });
      });
  }, [setAppState]);

  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="card ">
              <GetCompany
                isLoading={appState.loading}
                companies={appState.companies}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
