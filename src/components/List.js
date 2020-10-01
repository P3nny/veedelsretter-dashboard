import React from "react";

const List = (props) => {
  const { companies } = props;
  if (!companies || companies.length === 0) return <p>No companies, sorry</p>;
  return (
    <ul>
      <h2 className="list-head">Veedelsretter</h2>
      {companies.map((company) => {
        return (
          <li key={company.id} className="list">
            <span className="company-text">{company.name} </span>
            <span className="company-description">{company.amount}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
