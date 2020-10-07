import React, { useState, useEffect } from "react";

import withListLoading from "./WithListLoading";
import AdminSum from "./AdminSums";
import AdminLocations from "./AdminLocations";
import AdminCounts from "./AdminCounts";

import PieChart from "./charts/pie";
import Calendar from "./charts/calendar";

const Dashboard = (props) => {
  const SumLoading = withListLoading(AdminSum);
  const LocationLoading = withListLoading(AdminLocations);
  const CountLoading = withListLoading(AdminCounts);

  const [appState, setAppState] = useState({
    loading: false,
    companies: null,
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
              <SumLoading
                isLoading={appState.loading}
                companies={appState.companies}
              />
            </div>
            <div className="card ">
              <LocationLoading
                isLoading={appState.loading}
                companies={appState.companies}
              />
            </div>
            <div className="card ">
              <CountLoading
                isLoading={appState.loading}
                companies={appState.companies}
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-header ">
                <h4 className="card-title">
                  Wann waren die umsatzstärksten Tage?
                </h4>
                <p className="card-category">
                  Summe Gutscheine und Soli nach Tag
                </p>
              </div>
              <div className="card-body">
                <div className="calendar">
                  <Calendar />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header ">
                <h4 className="card-title">Wo gab es den meisten Umsatz?</h4>
                <p className="card-category">
                  Summe Gutscheine und Soli nach Typ
                </p>
              </div>
              <div className="card-body">
                <PieChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
