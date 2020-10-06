import React from "react";

const AdminLocations = (props) => {
  const { companies } = props;
  if (!companies || companies.length === 0) return <p>No companies, sorry</p>;

  let companiesCount = companies.length;

  let lastCompany = new Date(
    Math.max(...companies.map((e) => new Date(e.approved_at)))
  );
  lastCompany = lastCompany.toLocaleDateString();

  return (
    <div>
      <div className="card-header ">
        <h4 className="card-title">Wie viele sind dabei?</h4>
      </div>
      <div className="card-body ">
        <p className="card-category">Anzahl Firmen</p>
        <div className="stats">
          <p className="big-number">{companiesCount}</p>
        </div>
        <p className="card-category">Letzte Anmeldung</p>
      </div>
      <div className="stats">
        <p className="big-number">{lastCompany}</p>
      </div>
      <i className="fa fa-history"></i> Updated 3 minutes ago
    </div>
  );
};

export default AdminLocations;
