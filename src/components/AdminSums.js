import React from "react";

const AdminSums = (props) => {
  const { companies } = props;
  if (!companies || companies.length === 0) return <p>No companies, sorry</p>;

  let amountSum = companies.reduce((acc, curr) => acc + curr.amount, 0) / 100;
  amountSum = amountSum.toLocaleString();

  let soliSum = companies.reduce((acc, curr) => acc + curr.soli, 0) / 100;
  soliSum = soliSum.toLocaleString();

  return (
    <div>
      <div className="card-header ">
        <h4 className="card-title">Unterstützung fürs Veedel</h4>
      </div>

      <div className="card-body ">
        <p className="card-category">Summe Gutscheine und Soli</p>
        <div className="stats">
          <p className="big-number">{amountSum} €</p>
        </div>
        <p className="card-category">Summe Soli</p>
        <div className="stats">
          <p className="big-number">{soliSum} €</p>
        </div>
      </div>
    </div>
  );
};

export default AdminSums;
