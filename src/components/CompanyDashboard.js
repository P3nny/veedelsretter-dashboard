import React, { useState, useEffect } from "react";
import CompanyAmountBarChart from "./charts/CompanyAmountBar";
import CompanySoliBarChart from "./charts/CompanySoliBar";

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
          <div className="col-md-8">
            <div className="card">
              <div className="card-header ">
                <h4 className="card-title">Wer macht den meisten Umsatz?</h4>
                <p className="card-category">
                  Top 10 Firmen nach Gutscheine und Soli
                </p>
              </div>
              <div className="card-body">
                <CompanyAmountBarChart />
              </div>
            </div>
            <div className="card">
              <div className="card-header ">
                <h4 className="card-title">Wer bekommt den meisten Soli?</h4>
                <p className="card-category">Top 10 Firmen nach Soli</p>
              </div>
              <div className="card-body">
                <CompanySoliBarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
