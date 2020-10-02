import React from "react";

const AdminLocations = (props) => {
  const { companies } = props;
  if (!companies || companies.length === 0) return <p>No companies, sorry</p>;

  let companiesCount = companies.length;

  let lastCompany = new Date(
    Math.max(...companies.map((e) => new Date(e.approved_at)))
  );
  lastCompany = lastCompany.toLocaleDateString();

  console.log(lastCompany);

  return (
    <div>
      <div className="card-header ">
        <h4 className="card-title">Wie viele sind dabei?</h4>
        <p className="card-category">Anzahl Firmen</p>
      </div>

      <div className="card-body ">
        <div className="stats">
          <p className="big-number">{companiesCount}</p>
        </div>
      </div>

      <div className="card-header ">
        <h4 className="card-title">Letzte Anmeldung</h4>
        <p className="card-category">Neu dabei seit</p>
      </div>

      <div className="card-body ">
        <div className="stats">
          <p className="big-number">{lastCompany}</p>
        </div>
        <i className="fa fa-history"></i> Updated 3 minutes ago
      </div>
    </div>
  );
};

export default AdminLocations;
