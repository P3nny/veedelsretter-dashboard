import React from "react";
import ChartistGraph from "react-chartist";

const data = {
  labels: [
    "Heiser OHG",
    "Ullmann GmbH & Co. KG",
    "Nodler - Cotthardt",
    "Geyer - Kobs",
    "Pöche - Vogt",
    "Sutschet Gruppe",
    "Huebel - Huber",
    "Deckert, Meissner and Scherer",
    "Umlauft - Poser",
    "Brix - Daudrich",
  ],
  series: [[7987, 2784, 2539, 2168, 1999, 1658, 1518, 1332, 1298, 1120]],
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

const CompanySoliBarChart = () => (
  <div>
    <ChartistGraph data={data} type={"Bar"} options={options} />
  </div>
);

export default CompanySoliBarChart;
