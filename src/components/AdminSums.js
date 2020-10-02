import React from "react";

const AdminSums = (props) => {
  const { companies } = props;
  if (!companies || companies.length === 0) return <p>No companies, sorry</p>;
  let amountSum = companies.reduce((acc, curr) => acc + curr.amount, 0) / 100;
  amountSum = amountSum.toLocaleString();
  return <div>{amountSum} €</div>;
};

export default AdminSums;
