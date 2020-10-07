import React from "react";
import ChartistGraph from "react-chartist";

const PieChart = () => {
  let data = {
    labels: ["Geschäft", "Kneipe", "Restaurant"],
    series: [127388.86, 124795.75, 303754.21],
  };

  return <ChartistGraph data={data} type="Pie" />;
};

export default PieChart;
