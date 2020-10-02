import React, { useState, useEffect } from "react";
// import ChartistGraph from "react-chartist";
import withListLoading from "./WithListLoading";
import List from "./List";
import AdminSum from "./AdminSums";
import AdminLocations from "./AdminLocations";

const Dashboard = (props) => {
  const SumLoading = withListLoading(AdminSum);
  const LocationLoading = withListLoading(AdminLocations);
  const ListLoading = withListLoading(List);

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
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-header ">
                <h4 className="card-title">Users Behavior</h4>
                <p className="card-category">24 Hours performance</p>
              </div>
              <div className="card-body "></div>
              <div className="card-footer ">
                <div className="legend">
                  <i className="fa fa-circle text-info"></i> Open
                  <i className="fa fa-circle text-danger"></i> Click
                  <i className="fa fa-circle text-warning"></i> Click Second
                  Time
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-history"></i> Updated 3 minutes ago
                </div>
                <div className="container">
                  <p>
                    <ListLoading
                      isLoading={appState.loading}
                      companies={appState.companies}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
