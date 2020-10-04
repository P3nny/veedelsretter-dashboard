import React, { useState } from "react";

const CompanyProfile = (props) => {
  const { companies } = props;
  if (!companies || companies.length === 0) return <p>No companies, sorry</p>;

  let filteredCompany = companies.filter(
    (company) => company.name === "Heiser OHG"
  );

  let company = filteredCompany[0];

  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card-header ">
              <h4 className="card-title">Ausgewählte Firma</h4>
              <p className="card-category">Location</p>
              <h3 className="name">{company.name}</h3>
            </div>

            <div className="card-body">
              <p className="">Verkaufte Gutscheine: {company.voucher_count}</p>
              <p className="">
                Eingelöste Gutscheine: {company.redeemed_voucher_count}
              </p>
              <p className="">Bestellungen: {company.orders_count}</p>
              <p className="">
                Umsatz insgesamt: {(company.amount / 100).toLocaleString()} €
              </p>
              <p className="">
                Davon Soli: {(company.soli / 100).toLocaleString()} €
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
