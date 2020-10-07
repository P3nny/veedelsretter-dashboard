import React from "react";
import ChartistGraph from "react-chartist";

const data = {
  labels: [
    "Heiser OHG",
    "Nodler - Cotthardt",
    "Ullmann GmbH & Co. KG",
    "Umlauft - Poser",
    "Sutschet Gruppe",
    "Huebel - Huber",
    "Geyer - Kobs",
    "Pöche - Vogt",
    "Deckert, Meissner and Scherer",
    "Brix - Daudrich",
  ],
  series: [[18957, 16379, 7977, 6813, 6368, 6308, 4891, 4719, 2630, 1760]],
  stackBars: true,
};

let options = {
  axisX: {
    offset: 70,
  },
  axisY: {
    offset: 70,
  },
};

const CompanyAmountBarChart = () => (
  <div>
    <ChartistGraph data={data} type={"Bar"} options={options} />
  </div>
);

export default CompanyAmountBarChart;
