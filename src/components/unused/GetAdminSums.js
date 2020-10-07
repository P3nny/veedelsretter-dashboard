import React from "react";
// import { sum } from "zebras";

const GetAdminSums = (props) => {
  const { companies } = props;

  if (!companies || companies.length === 0) return <p>No companies, sorry</p>;
  return (
    <p>
      {companies.map((company) => {
        return (
          <li key={company.id} className="list">
            <span className="company-text">{company.name} </span>
            <span className="company-description">{company.amount}</span>
          </li>
        );
      })}
    </p>
  );
};

export default GetAdminSums;
