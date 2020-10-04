import React, { useEffect, useState } from "react";
import UseInputState from "./UseInputState";

const GetCompany = (props) => {
  const { companies } = props;
  const [selectedCompany, setSelectedCompany] = useState("Heiser OHG");

  if (!companies || companies.length === 0) return <p>No companies, sorry</p>;

  return (
    <div>
      <div className="card-header ">
        <h4 className="card-title">Firma wählen</h4>
        <p className="card-category">Wen suchst du?</p>
      </div>
      <div className="card-body ">
        <h3>Ausgewählt: {selectedCompany}</h3>
        <select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          {companies.map((company) => {
            return (
              <option
                key={company.name}
                value={company.name}
                onChange={UseInputState}
              >
                {company.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default GetCompany;
