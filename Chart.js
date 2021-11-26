import ChartBar from "./ChartBar";

import "./Chart.css";

const chart = (props) => {
  const hahaha = props.dataPoints.map((dataPoint) => dataPoint.value);

  const totalMax = Math.max(...hahaha);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          Key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default chart;
