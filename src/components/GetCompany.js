import React, { useState } from "react";
import Select from "react-select";

const GetCompany = (props) => {
  const { companies } = props;

  const [selectedCompany, updateSelectedCompany] = useState("Heiser OHG");

  if (!companies || companies.length === 0) return <p>No companies, sorry</p>;

  let company = companies.filter((company) => company.name === selectedCompany);
  company = company[0];

  const listOfCompanies = companies.map((company) => ({
    label: company.name,
    value: company.name,
  }));

  listOfCompanies.sort((a, b) => {
    const nameA = a.label.toUpperCase(); // Groß-/Kleinschreibung ignorieren
    const nameB = b.label.toUpperCase(); // Groß-/Kleinschreibung ignorieren
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });

  return (
    <div>
      <div>
        <div className="card-header ">
          <h4 className="card-title">Firma wählen</h4>
          <p className="card-category">Wen suchst du?</p>
        </div>
        <div className="card-body ">
          <Select
            options={listOfCompanies}
            value={selectedCompany}
            onChange={(opt) => updateSelectedCompany(opt.value)}
          />
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
