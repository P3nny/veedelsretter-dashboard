import React from "react";
import ChartistGraph from "react-chartist";

const data = {
  labels: ["März", "April", "Mai", "Juni"],
  series: [[426108, 121484, 7836, 510]],
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

const BarChart = () => (
  <div>
    <ChartistGraph data={data} type={"Bar"} options={options} />
  </div>
);

export default BarChart;
