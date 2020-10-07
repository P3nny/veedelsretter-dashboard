import React from "react";

const AdminCounts = (props) => {
  const { companies } = props;
  if (!companies || companies.length === 0) return <p>No companies, sorry</p>;

  let voucherSum = companies.reduce(
    (acc, curr) => Number(acc) + Number(curr.voucher_count),
    0
  );

  let redeemedVoucherSum = companies.reduce(
    (acc, curr) => Number(acc) + Number(curr.redeemed_voucher_count),
    0
  );

  let voucherPercentage = Math.round((redeemedVoucherSum / voucherSum) * 100);

  voucherSum = voucherSum.toLocaleString();
  redeemedVoucherSum = redeemedVoucherSum.toLocaleString();
  voucherPercentage = voucherPercentage.toLocaleString();

  return (
    <div>
      <div className="card-header ">
        <h4 className="card-title">Übersicht Voucher</h4>
      </div>

      <div className="card-body ">
        <p className="card-category">Gesamtzahl verkaufte Voucher</p>
        <div className="stats">
          <p className="big-number">{voucherSum}</p>
        </div>
        <p className="card-category">Gesamtzahl eingelöste Voucher</p>
        <div className="stats">
          <p className="big-number">{redeemedVoucherSum}</p>
        </div>
        <p className="card-category">Wie viel % wurden eingelöst?</p>
        <div className="stats">
          <p className="big-number">{voucherPercentage} %</p>
        </div>
      </div>
    </div>
  );
};

export default AdminCounts;
