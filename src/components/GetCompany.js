import React from "react";
import UseInputState from "./hooks/UseInputState";

const GetCompany = (props) => {
  const { companies } = props;
  const [selectedCompany, updateSelectedCompany] = UseInputState("Heiser OHG");

  if (!companies || companies.length === 0) return <p>No companies, sorry</p>;

  return (
    <div>
      <div className="card-header ">
        <h4 className="card-title">Firma wählen</h4>
        <p className="card-category">Wen suchst du?</p>
      </div>
      <div className="card-body ">
        <h3>Ausgewählt: {selectedCompany}</h3>
        <select value={selectedCompany} onChange={updateSelectedCompany}>
          {companies.map((company) => {
            return (
              <option value={company.name} onChange={UseInputState}>
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
