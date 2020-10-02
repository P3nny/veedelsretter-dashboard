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
      <h4 className="card-title">Unterstützung fürs Veedel</h4>
      <p className="card-category">Summe Gutscheine und Soli</p>
      <p className="big-number">{amountSum} €</p>
      <h4 className="card-title">Spenden</h4>
      <p className="card-category">Summe Soli</p>
      <p className="big-number">{soliSum} €</p>
    </div>
  );
};

export default AdminSums;
