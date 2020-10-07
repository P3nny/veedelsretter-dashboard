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
          <p className="card-category">Letzte Anmeldung</p>
          <div className="stats">
            <p className="big-number">{lastCompany}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLocations;
