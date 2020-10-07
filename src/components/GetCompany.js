import React from "react";
import UseInputState from "./hooks/UseInputState";

const GetCompany = (props) => {
  const { companies } = props;

  const [selectedCompany, updateSelectedCompany] = UseInputState("Heiser OHG");

  if (!companies || companies.length === 0) return <p>No companies, sorry</p>;

  let company = companies.filter((company) => company.name === selectedCompany);
  company = company[0];

  return (
    <div>
      <div>
        <div className="card-header ">
          <h4 className="card-title">Firma wählen</h4>
          <p className="card-category">Wen suchst du?</p>
        </div>
        <div className="card-body ">
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
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card-header ">
                <h4 className="card-title">Ausgewählte Firma:</h4>
                <h3 className="name">{company.name}</h3>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p>Verkaufte Gutscheine: {company.voucher_count}</p>
                <p>Eingelöste Gutscheine: {company.redeemed_voucher_count}</p>
                <p>
                  Prozent eingelöst:{" "}
                  {Math.round(
                    (company.redeemed_voucher_count / company.voucher_count) *
                      100
                  )}
                  %
                </p>

                <p>Bestellungen: {company.orders_count}</p>
                <p>
                  Umsatz insgesamt: {(company.amount / 100).toLocaleString()} €
                </p>
                <p>Davon Soli: {(company.soli / 100).toLocaleString()} €</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCompany;
